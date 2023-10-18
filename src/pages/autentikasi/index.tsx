import { getServerAuthSession } from "@/server/auth"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

export default function index() {
  return (
    <div className="container">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quia.
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx)
  return {
    props: {
      session
    }
  }
}