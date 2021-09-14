import type { NextPage } from "next";
import Head from "next/head";
import Lottie from "react-lottie";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiShipLine } from "react-icons/ri";

import wave from "../assets/lotties/wave.json";
import { Container, Form, AlignContentForm } from "../styles/pages/landing";
import InputText from "../components/InputText";
import ButtonDefault from "../components/ButtonDefault";
import OutlinedButton from "../components/OutlinedButtonDefault";
import ButtonText from "../components/ButtonText";

type LoginForm = {
  email: string;
  password: string;
};

const Landing: NextPage = () => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: wave,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<LoginForm> = (data: object) =>
    console.log(data);

  return (
    <Container>
      <Head>
        <title>JobSea</title>
      </Head>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <AlignContentForm>
          <h1>
            Job{" "}
            <RiShipLine
              style={{ color: "var(--primary-color)", fontSize: "2.3rem" }}
            />{" "}
            Sea
          </h1>
          <InputText {...register("email")} placeholder="Email" type="text" />
          <InputText
            {...register("password")}
            placeholder="Password"
            type="password"
          />
        </AlignContentForm>
        <AlignContentForm>
          <ButtonDefault title="Entrar" />
          <OutlinedButton title="Cadastre-se" />
          <ButtonText title="Esqueceu a senha?" />
        </AlignContentForm>
      </Form>

      <Lottie
        options={defaultLottieOptions}
        style={{
          height: "100vw",
          width: "100vh",
          zIndex: 1,
          transform: "rotate(-90deg)",
          position: "absolute",
        }}
      />
    </Container>
  );
};

export default Landing;
