import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { TWITTER_LOGIN } from "../apollo/mutations";
import { CALLBACK_URL } from "../config";
import { useRouter } from "next/router";
import Image from 'next/image'
import twitterLoginImage from '../public/sign-in-with-twitter.png'
import { RefreshIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";

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
      toast.error("Se ha producido un error 😵");
    }
  };

  return (
    <Modal title="Entrar con Twitter" icon="info" open={showLogin} setOpen={(e) => {}}>
      <div>
        <p className="my-1 text-center">Threadly es una aplicación para mejorar la experiencia en Twitter.</p>
        <div className="flex justify-between text-center my-3 flex-wrap md:flex-nowrap">
          <p className="dark:bg-gray-700 p-3 rounded-lg dark:text-gray-300 w-full md:w-1/2 mb-2 md:mb-0 md:mr-2">Crea hilos de forma fácil y sencilla</p>
          <p className="dark:bg-gray-700 p-3 rounded-lg dark:text-gray-300 w-full md:w-1/2 mt-2 md:mt-0 md:ml-2">Publica en el horario que más interacciones tienes</p>
        </div>
        <button
          onClick={fetchTwitterLogin}
          className="rounded-xl bg-blue-300 p-2 mt-3 flex justify-center items-center w-full"
        >
          {
            loading
            ? <RefreshIcon className="h-6 w-6 text-black animate-spin" aria-hidden="true" />
            : <Image src={twitterLoginImage} alt="twitter login" width="141" height="16" />
          }
        </button>
      </div>
    </Modal>
  )
}
