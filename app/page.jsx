"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { auth } from "@/app/firebase/config";
import NextLink from "next/link";
import { login } from "@/utils/api.functions";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";

export default function Home() {
  const [name, setName] = useState("");
  const [IndexNo, setIndexNo] = useState("");
  const [userName, setUserName] = useState("");
  // const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  // const userSession =
  //   typeof window !== "undefined" ? sessionStorage.getItem("user") : null;
  const router = useRouter();
  const [user, setUser] = useState();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      // router.push("/chatsPage");
      router.push(`/chatsPage?userName=${data.data.username}`);
      toast.success("login successful");

      
    },
    onError: (error) => {
      toast.error("user does not exist");
    },
  });
  function signIn() {
    mutation.mutate({ IndexNo: IndexNo, name: name });
  }

  return (
    <div className="flex items-center justify-center ">
      <Card className="py-4 w-full max-w-md h-[70vh] mt-10 md:w-1/2 lg:max-w-xl xl:max-w-2xl ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="text-lg uppercase font-bold mt-10 md:text-xl lg:text-2xl">
            Login
          </h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-col items-center mt-10">
          <Input
            required
            type="text"
            label="Name"
            defaultValue="Ama"
            className="w-full md:max-w-xs lg:max-w-sm"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            type="password"
            label="Password"
            className="w-full md:max-w-xs lg:max-w-sm mt-5"
            onChange={(e) => setIndexNo(e.target.value)}
          />
          <Button
            className="mt-5 bg-blue-500 text-white px-6 py-4 w-full md:w-auto lg:w-auto xl:w-auto"
            onClick={() => signIn()}
            isLoading={mutation.isLoading}
          >
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
