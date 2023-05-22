"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Btn_Child = () => {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
};

export default Btn_Child;
