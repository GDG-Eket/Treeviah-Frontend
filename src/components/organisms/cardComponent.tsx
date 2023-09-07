import { useRouter } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

type UserData = {
  userurl1: StaticImageData; // Assuming userurl is a URL or string
  userurl2: StaticImageData; // Assuming userurl is a URL or string
  userurl3: StaticImageData; // Assuming userurl is a URL or string
  text: number;
};

interface Card {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  questionNumber: number;
  userData: UserData;
}

const Card: React.FC<Card> = ({
  id,
  title,
  image,
  questionNumber,
  userData: { userurl1, userurl2, userurl3, text },
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/item/${[id]}`);
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <div className="card">
        <Image src={image} alt={title} width={700} height={300} />
        <h2>{title}</h2>
        <p>{questionNumber} Question</p>
        <div className="flex">
          <h4>{text}+ Joined</h4>
          <div className="flex relative h-20">
            <Image
              src={userurl1}
              alt="user.png"
              width={700}
              height={300}
              className="w-10 h-10 rounded-full absolute top-0 left-0"
            />
            <Image
              src={userurl2}
              alt="user.png"
              width={700}
              height={300}
              className="w-10 h-10 rounded-full absolute top-0 left-5"
            />
            <Image
              src={userurl3}
              alt="user.png"
              width={700}
              height={300}
              className="w-10 h-10 rounded-full absolute top-0 left-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
