import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 mx-w-lg">
          <h2>Prepare-se para entrevistas com prática e feeedback com a CareerCoach-AI</h2>
           <p className="text-lg">
            A CareerCoach-AI é uma plataforma inovadora que utiliza inteligência artificial para ajudar candidatos a se prepararem para entrevistas de emprego.
           </p>

           <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview"> Comece a praticar agora </Link>
           </Button>
        </div>

        <Image src="/robot.png" alt="cara robô" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Suas Entrevistas</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* {<p>Você não realizou nenhuma entrevista ainda..</p>} */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Faça uma entrevista</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>  
    </>
  );
}

export default Page