"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import FormField from "@/components/FormField";
import {useRouter} from "next/navigation";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if(type === 'sign-up') {
                toast.success('Conta criada com sucesso. Por favor, faça login.');
                router.push('/sign-in')
            } else {
                toast.success('Login realizado com sucesso.');
                router.push('/')
            }
        } catch (error) {
            console.log(error);
            toast.error(`Ocorreu um erro: ${error}`)
        }
    }

    const isSignIn = type === 'sign-in';

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        height={32}
                        width={38}
                    />
                    <h2 className="text-primary-100">CareerCoach-AI</h2>
                </div>

                <h3>Pratique entrevista de emprego com IA</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Seu Nome"
                            />
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Seu endereço de Email."
                            type="email"
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            type="password"
                        />

                        <Button className="btn" type="submit">{isSignIn ? 'Entrar' : 'Crie uma conta'}</Button>
                    </form>
                </Form>
                
                <p className="text-center">
                    {isSignIn ? 'Ainda não tem conta?' : 'Já tem uma conta?'}
                    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
                        {!isSignIn ? "Entrar" : 'Cadastrar-se'}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default AuthForm