import Image from "next/image";

const ProfilePhoto = () => {
    return (
        <div className="w-full">
            <Image src="/images/islam.jpeg" 
            width={400} 
            height={535} 
            alt="Islam - React Developer"
            className={"rounded-[10px]"} 
            priority 
            />
        </div>
    )
}

export default ProfilePhoto