"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" }, // Assuming we will migrate these or they map to .html
    { name: "Fiyatlar", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="py-2">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
             <img src="/assets/img/logo/logo.svg" alt="BRI Logo" className="h-8" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link color="foreground" href={item.href} className="text-sm font-medium">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="https://briportal.com/login" className="text-primary font-medium">Giriş</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="https://briportal.com/register" variant="solid" className="bg-primary text-white font-medium rounded-full px-6">
            Üye Ol
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
             <Link href="https://briportal.com/login" size="lg" className="w-full text-primary">Giriş</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
             <Button as={Link} href="https://briportal.com/register" color="primary" className="w-full">Üye Ol</Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
