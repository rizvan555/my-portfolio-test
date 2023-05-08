import React, { useState } from 'react';
import 'animate.css/animate.min.css';

function Page3() {
  const [click, setClick] = useState('Deutsch');
  // const [selected, setSelected] = useState('Deutsch');
  const languages = ['Deutsch', 'English', 'Turkish', 'Russian', 'Azerbaijani'];
  const languageContain: any = {
    Deutsch:
      "Although I haven't lived in Germany for long, I know the German language and culture inside out and am trying to fully integrate. Accordingly, I started integration courses immediately after my arrival and after some time successfully completed them with a C1 language certificate.",
    English:
      'Because I have lived in China and Dubai for a while and I have used English in my work experience, I have English language experience. I can freely express my thoughts in English and I can understand the person I am communicating with.',
    Turkish:
      'I can speak, write, read and understand Turkish in a grammatically correct way.',
    Russian:
      'Since I received my secondary education in Russian language, I can write, read, understand and speak in Russian in a grammatically correct way.',
    Azerbaijani:
      'Azerbaijani is my mother tongue and I can speak and understand it freely.',
  };

  function handleClick(language: any) {
    setClick(language);
  }
  const content = languageContain[click];

  return (
    <div className=" py-10">
      <header className=" flex pl-20">
        <h2
          className=" text-4xl font-bold mb-8 tracking-wider font-serif animate__animated overflow-hidden whitespace-nowrap "
          style={{ animationDuration: '4s' }}
        >
          Languages
        </h2>
      </header>
      <main className=" flex justify-around p-6">
        <div className=" w-[40vw] bg-slate-700">
          <ul className=" flex flex-col justify-center items-center py-10 text-[#fff] text-3xl">
            {languages.map((language, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleClick(language)}
                  className="mb-6 tracking-wider cursor-pointer font-serif text-slate-300 hover:text-[#fff] active:text-[#fff] hvr-underline-from-center pb-1"
                >
                  {language}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" w-[40vw] leading-10 text-xl">
          <p>{content}</p>
        </div>
      </main>
    </div>
  );
}

export default Page3;
