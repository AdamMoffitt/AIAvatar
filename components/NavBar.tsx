"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GithubIcon } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";
import Logo from "../assets/logo/iris_logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link isExternal aria-label="HeyGen" href="https://irisai.app/">
          <Image src={Logo} alt="Iris Logo" objectFit="contain" width={50} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="flex flex-row items-center gap-4">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
