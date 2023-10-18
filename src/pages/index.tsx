import { getServerAuthSession } from "@/server/auth"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

export default function index() {
  return (
    <div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx)
  if (!session) return {
    redirect: {
      permanent: false,
      destination: '/autentikasi'
    }
  }
  return {
    props: {}
  }
}