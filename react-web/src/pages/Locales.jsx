import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Local } from "../components/Local";

import local1 from "../img/local1.png"
import local2 from "../img/local2.png"
import local3 from "../img/local3.png"

export function Locales() {
  return (
    <>
      <Nav />
      <Local imagen={local1} titulo={"Local Almagro"} descripcion={"Almagro es un animado distrito residencial y comercial que alberga restaurante informales, tiendas de moda y centros comerciales discretos sobre avenidas como Corrientes y Rivadavia."} />
      <Local imagen={local2} titulo={"Local Palermo"} descripcion={"Palermo es un área extensa que abarca enclaves pequeños, como los concurridos Palermo Soho y Palermo Hollywood, que albergan restaurantes eclécticos, coctelerías y tiendas de moda."} />
      <Local imagen={local3} titulo={"Local Puerto Madero"} descripcion={"Puerto Madero es un área renovada cercana al muelle. Sus edificios reconvertidos de ladrillos rojos contienen restaurantes de carnes de lujo populares entre los turistas y los que están de almuerzo de negocios."} />
      <Footer />
    </>
  );
}
