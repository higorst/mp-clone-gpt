'use client'

import { ReactElement, useEffect, useState } from "react";
import { KeyInstructions } from './_components/key-instructions';
import { ChatInput } from './_components/chat-input';

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState<string>('')

  return (
    <main className="w-full h-screen p-10 flex flex-col justify-between">
      <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
        CloneGPT
      </h1>

      <KeyInstructions />
      <ChatInput 
        placeholder='🔑    Digite sua chave de API'
        onSubmitMessage={setOpenAiKey}
      />
    </main>
  );
}

export default Home;
