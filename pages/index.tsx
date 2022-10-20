import type { NextPage } from "next";
import Image from "next/image";
import mainImage from "../public/assets/image/mainImg.png";
const Home: NextPage = () => {
  return (
    <main className="container mx-auto">
      <section className="flex py-10 flex-col">
        <h1 className="mx-auto text-6xl text-textBlack ">가치그림</h1>
        <p className="mx-auto pt-6 text-center">
          가치그림은 간단하게 다른 사람에게 그림을 통해서 설명해줄 수 있는
          공간을 제공합니다. 한번의 클릭으로 그림방을 만들고 링크를 공유하여,
          상대방에게 설명해주세요!
        </p>
      </section>
      <section className="flex">
        <a className="mx-auto p-3 bg-primary text-white rounded-xl px-6 hover:opacity-80 hover:scale-105 cursor-pointer">
          시작하기
        </a>
      </section>
      <section className="flex">
        <div className="mx-auto pt-10 w-5/6 block md:w-1/2">
          <Image src={mainImage} alt="mainImage" layout="responsive" />
        </div>
      </section>
    </main>
  );
};

export default Home;
