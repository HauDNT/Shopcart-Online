import Container from "@/components/Container"
import { Button } from "@/components/ui/button"

const Home = () => {
  return <div className="bg-shop-light-pink">
    <Container>
      <h2 className="text-xl font-semibold">Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse tempora deleniti dicta provident atque adipisci fugiat animi, sit tenetur ea asperiores magnam est nam placeat at commodi temporibus earum.</p>
      <Button size="lg">Checkout</Button>
    </Container>
  </div>
}

export default Home