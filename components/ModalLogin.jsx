import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { TWITTER_LOGIN } from "../apollo/mutations";
import { CALLBACK_URL } from "../config";
import { useRouter } from "next/router";
import Image from 'next/image'
import twitterLoginImage from '../public/sign-in-with-twitter.png'

export default function ModalLogin() {
  const router = useRouter();
  const showLogin = useSelector((state) => state.user.token === null);
  const [twitterLogin, { data, loading, error }] = useMutation(TWITTER_LOGIN);

  const fetchTwitterLogin = async (e) => {
    e.preventDefault();
    try {
      const {
        data: {
          twitterLogin: { status, url },
        },
      } = await twitterLogin({ variables: { text: CALLBACK_URL } });

      if (status) {
        router.push(url);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Entrar con Twitter" icon="info" open={showLogin} setOpen={(e) => {}}>
      <div>
        <p>Threadly es una aplicación para mejorar la experiencia en Twitter.</p>
        <p>Crea hilos de forma fácil y sencilla</p>
        <p>Publica en el horario que más interacciones tienes</p>
        <button
          onClick={fetchTwitterLogin}
          className="rounded-xl bg-blue-300 p-2 mt-3 w-52 flex justify-center items-center"
        >
          <Image src={twitterLoginImage} alt="twitter login" width="141" height="16" />
        </button>
      </div>
    </Modal>
  )
}
