"use client";
import React, { useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine';
import { login } from '@/utils/api.functions';
import { useRouter } from "next/navigation";

import { useSearchParams } from 'next/navigation';

const page = () => {
  const router = useRouter();
 

  const searchParams = useSearchParams();
  const userName = searchParams.get('userName');

  

  return (
    <ChatEngine
    projectID= {process.env.CHAT_PROJECT_ID}
    userName= {`${userName}`}
    userSecret={`${userName}`}
  />
  )
}

export default page
 