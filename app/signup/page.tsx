"use client";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import NextLink from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async () => {

      try {
        await createUserWithEmailAndPassword(email, password);
        
        alert("user created please sign in")
        router.push("/");
        sessionStorage.setItem("user", true.toString());
        setEmail("");
        setPassword("");
      } catch (e) {
        
        console.error(e);
        
      }
   
  };
  return (
    <div className="flex items-center justify-center ">
      <Card className="py-4 w-full max-w-md h-[70vh] mt-10 md:w-1/2 lg:max-w-xl xl:max-w-2xl ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="text-lg uppercase font-bold mt-10 md:text-xl lg:text-2xl">
            Sign Up
          </h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-col items-center mt-10">
          <Input
            required
            type="email"
            label="Email"
            defaultValue="junior@nextui.org"
            className="w-full md:max-w-xs lg:max-w-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            required
            type="password"
            label="Password"
            className="w-full md:max-w-xs lg:max-w-sm mt-5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="mt-5 bg-blue-500 text-white px-6 py-4 w-full md:w-auto lg:w-auto xl:w-auto"
            onClick={() => handleSignUp()}
          >
          Sign Up
          </Button>
          <span className="text-default-600 mt-10 md:text-lg lg:text-xl">
        Already have an account? <NextLink className="text-primary hover:cursor-pointer" href="/">Log in</NextLink>
      </span>
        </CardBody>
      </Card>
    </div>
  );
}
