import type { LucideIcon } from "lucide-react";
import {
  Film,
  Gift,
  ShoppingCart,
} from "lucide-react";

import casePadelShop from "@/assets/padelshop.png";
import caseMarciaVidal from "@/assets/marciavidal.png";
import caseCositasLindas from "@/assets/cositaslindas.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  technologies: string[];
  img: string;
  icon: LucideIcon;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "padelshop",
    title: "PadelShop Perú",
    category: "Ecommerce deportivo",
    summary:
      "Tienda virtual completa para vender productos de pádel y gestionar el negocio desde un panel administrativo.",
    description:
      "Desarrollamos una experiencia de compra moderna para PadelShop Perú, conectando catálogo, variantes, stock, clientes, pagos y pedidos en una sola plataforma responsive.",
    challenge:
      "El negocio necesitaba dejar atrás un proceso de venta manual y contar con una plataforma propia que transmitiera confianza, facilitara la compra y permitiera administrar productos y pedidos sin depender de terceros.",
    solution:
      "Creamos un ecommerce con las tecnologías más seguras y confiables del presente año, conectado a una base de datos propia y Culqi. Incluimos autenticación, carrito, checkout, tarifas de envío, variantes, control de stock, historial de pedidos, correos automáticos y panel administrador.",
    results: [
      "Proceso de compra digital de principio a fin",
      "Administración centralizada de productos, stock y pedidos",
      "Pagos online integrados con Culqi",
      "Experiencia optimizada para móvil y posicionamiento SEO",
    ],
    services: [
      "Diseño UX/UI",
      "Desarrollo ecommerce",
      "Panel administrativo",
      "Integración de pagos",
      "SEO técnico",
    ],
    technologies: [
      "Ecommerce",
      "Sitio Web",
      "Base de Datos",
      "Culqi",
    ],
    img: casePadelShop,
    icon: ShoppingCart,
    url: "https://www.padelshop.pe/",
  },
  {
    slug: "marcia-vidal",
    title: "Marcia Vidal",
    category: "Plataforma de contenido audiovisual",
    summary:
      "Sitio web profesional orientado a presentar contenido audiovisual, trayectoria y producciones de Marcia Vidal.",
    description:
      "Desarrollamos una plataforma digital moderna y autogestionable para centralizar los contenidos, videos y proyectos de Marcia Vidal dentro de una experiencia visual atractiva y fácil de navegar.",
    challenge:
      "Marcia necesitaba renovar su presencia digital y contar con una plataforma estable desde la cual pudiera organizar, publicar y gestionar sus contenidos audiovisuales sin depender constantemente de un desarrollador.",
    solution:
      "Implementamos una web responsive con integración de Vimeo, reproducción de videos, organización de contenidos y un panel administrativo conectado a una base de datos propia para gestionar las publicaciones directamente desde la plataforma.",
    results: [
      "Contenido audiovisual centralizado",
      "Gestión autónoma mediante panel administrativo",
      "Integración directa con Vimeo",
      "Experiencia optimizada para dispositivos móviles",
      "Imagen digital más profesional",
    ],
    services: [
      "Diseño y desarrollo web",
      "Panel administrativo",
      "Integración con Vimeo",
      "Gestión de contenido",
      "Optimización responsive",
    ],
    technologies: [
      "Landing Page",
      "Base de Datos",
      "Vimeo API",
    ],
    img: caseMarciaVidal,
    icon: Film,
    url: "https://marciavidal.com/",
  },
  {
    slug: "cositas-lindas",
    title: "Cositas Lindas",
    category: "Tienda online de regalos y detalles",
    summary:
      "E-commerce moderno diseñado para exhibir y vender regalos personalizados de forma rápida y atractiva.",
    description:
      "Desarrollamos una tienda virtual enfocada en brindar una experiencia de compra sencilla, permitiendo a los clientes descubrir productos, realizar pedidos y contactar fácilmente con la marca.",
    challenge:
      "El negocio necesitaba una presencia digital profesional para mostrar su catálogo, fortalecer la confianza de sus clientes y facilitar la venta de regalos personalizados desde cualquier dispositivo.",
    solution:
      "Creamos un e-commerce responsive con catálogo organizado, fichas de productos, navegación intuitiva, llamadas a la acción y una experiencia optimizada tanto para computadoras como para dispositivos móviles.",
    results: [
      "Catálogo digital disponible 24/7",
      "Mejor experiencia de compra para los clientes",
      "Mayor presencia y credibilidad online",
      "Navegación optimizada para dispositivos móviles",
      "Plataforma preparada para seguir creciendo",
    ],
    services: [
      "Diseño y desarrollo web",
      "Tienda virtual",
      "Optimización responsive",
      "SEO básico",
      "Optimización de rendimiento",
    ],
    technologies: [
      "Ecommerce",
      "Sitio Web",
      "Responsive Design",
      "Base de Datos",
    ],
    img: caseCositasLindas,
    icon: Gift,
    url: "https://cositaslindas.pe/",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);