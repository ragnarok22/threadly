import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { TWITTER_LOGIN } from "../apollo/mutations";
import { CALLBACK_URL } from "../config";
import { useRouter } from "next/router";

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
    <Modal title="titulo de ejemplo" icon="info" open={showLogin} setOpen={(e) => {}}>
      texto de ejemplo
      <button onClick={fetchTwitterLogin}>login</button>
    </Modal>
  )
}
