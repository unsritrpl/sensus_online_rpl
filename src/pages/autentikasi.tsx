import { getServerAuthSession } from "@/server/auth"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

export default function index() {
  return (
    <div>
      auth here
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