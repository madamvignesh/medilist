import TextType from "./TextType"

const HeaderText = () => (
    <div >
        <TextType
            text={[" Welcome to MediList — Your Health, Streamlined", "Book Smarter, Feel Better", "Care starts with connection"]}
            typingSpeed={75}
            pauseDuration={1500}
            className="text-4xl font-bold text-white"
            showCursor={true}
            cursorCharacter="|"
        />
    </div>
)

export default HeaderText;