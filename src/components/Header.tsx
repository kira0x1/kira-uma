import { useLocation } from "preact-iso";

export function Header() {
   const { url } = useLocation();

   return (
      <header>
         <nav>
            <a href="/" class={url == "/" && "active"}>
               Home
            </a>
            <a href="/sim" class={url == "/sim" && "active"}>
               Simulator
            </a>
            <a href="/skills" class={url == "/skills" && "active"}>
               Skills
            </a>
            <a href="/profile" class={url == "/profile" && "active"}>
               Profile
            </a>
         </nav>
      </header>
   );
}
