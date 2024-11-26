"use clinet"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function Hero(){

    return(
        <section id="#">
      <div className="w-full">
 
          <h1 className="text-lg line-clamp-1 font-bold">
            <span>
              Selamat datang para pemimpin masa depan
            </span>
          </h1>
          <p className="text-lg line-clamp-1 font-bold">
            Membangun mental pemimpin dengan pendektan perinsip-prinsip islam.
          </p>
          <div>
          <Button asChild className="rounded-full py-5 px-4 mt-4 mr-2">
                <Link href="#">Explor</Link>
              </Button>
          <Button asChild className="rounded-full py-5 px-4">
                <Link href="#">Join US</Link>
              </Button>
        
          </div>
  
      </div>
    </section>
    )
}