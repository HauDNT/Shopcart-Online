import Container from "@/components/Container"
import HeaderMenu from "@/components/HeaderMenu"
import Logo from "@/components/Logo"
import SearchBar from "@/components/SearchBar"

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <Logo/>
        <HeaderMenu/>
        <div>
          <SearchBar/>
        </div>
      </Container>
    </header>
  )
}

export default Header
