import CartIcon from "@/components/CartIcon"
import Container from "@/components/Container"
import FavoriteButton from "@/components/FavoriteButton"
import HeaderMenu from "@/components/HeaderMenu"
import Logo from "@/components/Logo"
import MobileMenu from "@/components/MobileMenu"
import SearchBar from "@/components/SearchBar"
import SignIn from "@/components/SignIn"

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu/>
          <Logo/>
        </div>
        <HeaderMenu/>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar/>
          <CartIcon/>
          <FavoriteButton/>
          <SignIn/>
        </div>
      </Container>
    </header>
  )
}

export default Header
