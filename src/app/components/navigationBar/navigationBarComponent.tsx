import Link from "next/link";
import Image from "next/image";
import ShopLogo from "../../../../public/assets/crown.svg";

function NavigationBarComponent() {
  return (
    <div className="flex flex-wrap flex-row justify-between items-center px-8 pt-8">
      <Link href="/">
        <Image src={ShopLogo} alt={"Logo"} />
      </Link>
      <div className="flex flex-wrap flex-grow items-center justify-end gap-4">
        <Link href="/shop">Shop</Link>
        <Link href="/shop">Other Route</Link>
      </div>
    </div>
  );
}

export default NavigationBarComponent;
