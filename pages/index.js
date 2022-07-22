import Image from "next/image";

export default function Home() {
  return (
    <div className="container justify-content-center position-relative vh-100">
      <main className="justify-content-center text-center position-absolute top-50 start-50 translate-middle">
        <h2>What happens here, stays here 😎 </h2>
        <br />
        <div className="justify-content-center ">
          <Image
            className="rounded"
            src="/logo.jpg"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
