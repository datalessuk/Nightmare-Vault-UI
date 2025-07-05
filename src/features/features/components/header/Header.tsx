import React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

function Header() {
  return (
    <>
      <header>
        <div className="flex items-center justify-center pt-4 mx-auto max-w-5xl ">
          <h1 className="text-5xl font-bold creepster-text text-red-500">
            Nightmare <span className="text-white">Vault</span>
          </h1>
        </div>
        <div className="flex justify-center mt-1">
          <div className="border-b-2 border-white max-w-6xl w-full">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/home">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/movies">Movies</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/streaming">Streaming Now</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/watchlist"
                      className="flex-row items-center gap-2"
                    >
                      <Bookmark className="w-4 h-4" />
                      <span>Watchlist</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    {/* <Link href="/docs">TV Shows</Link> */}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
