import "./App.css";
import orangePaper from "./assets/orange-paper.jpg";
import paper from "./assets/paper.jpg";
import r65 from "./assets/keebs/r65.png";
import f75 from "./assets/keebs/f75.png";
import s98 from "./assets/keebs/s98.png";
import wristrest from "./assets/accessories/wrist-rest.png";
import customPadS from "./assets/accessories/deskpad-s.png";
import customPadM from "./assets/accessories/deskpad-m.png";
import hcFlag from "./assets/flag-standalone-wtransparent.svg";
import { motion } from "motion/react";
import Collapsible from "./components/collapsible";
import dinoWant from "./assets/dinos/dino-want-modified.png";
import { ArrowRightIcon, CircleArrowDownIcon } from "lucide-react";
import { KeycapTypes } from "./lib/constants";
import KbdCustomizer from "./components/kbd-customizer";
import dinoTired from "./assets/dinos/tired-dino.png";
import create from "./assets/drawings/create.png";
import customize from "./assets/drawings/customize.png";
import signUp from "./assets/drawings/sign-up.png";
import { Link } from "react-router";
function App() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-6 md:p-12 flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${orangePaper})` }}
      >
        <a href="https://hackclub.com/">
          <img
            className="absolute top-0 left-2 border-0 w-36 z-10 hover:rotate-3 hover:scale-105 transition duration-200"
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club"
          />
        </a>
        <div className="flex flex-col gap-6 items-center justify-center md:w-3/5 w-full">
          <p className="text-3xl">welcome to</p>
          <div
            className="rounded p-8 text-5xl  shadow-md shadow-gray-500 w-full text-center bg-cover relative flex items-center justify-center"
            style={{ backgroundImage: `url(${paper})` }}
          >
            <img
              src="/assets/keycaps/hc.png"
              className="-left-4 relative w-12 h-12 -rotate-12"
            />
            <b>keeb</b>
            <span className="font-thin">stagram!</span>
            <div className="p-4 -right-8 -bottom-8 rotate-5 border-dashed w-fit absolute hover:rotate-10 hover:scale-120 duration-200">
              <img src={r65} width={120} height={120} />
            </div>
            <div className="p-4 -left-8 -top-8 rotate-5 border-dashed w-fit absolute hover:-rotate-10 hover:scale-120 duration-200">
              <img src={f75} width={120} height={120} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-4xl">
              making keyboard-related projects,
            </p>
            <p className="text-4xl">
              get <b>exclusive hack club keycaps and deskpads,</b>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-4xl">
                and, a real <b>mechanical keyboard</b> irl!
              </p>
            </div>
          </div>
          <input
            type="email"
            className="border border-orange-900 bg-orange-100 p-4 text-4xl hover:scale-102 w-full duration-200"
            placeholder="enter your email (teens 13-18)"
          />
          <div className="flex flex-col gap-4 w-full md:flex-row items-stretch">
            <a
              href="https://forms.fillout.com/t/bxin5RUWWhus"
              className="flex-1"
            >
              <button className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start w-full h-full">
                rsvp now :3
                <img
                  src={dinoWant}
                  className="absolute right-4 bottom-0"
                  width={84}
                />
              </button>
            </a>
            <Link to="/app/profile" className="flex-1">
              <button className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 flex-1 duration-200 relative flex items-center justify-between w-full h-full">
                preview platform!
                <ArrowRightIcon width={48} height={48} />
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="flex gap-2 animate-bounce items-center">
              <CircleArrowDownIcon width={24} />
              <p className="text-3xl uppercase font-bold">
                Scroll down for more!
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <motion.img
              src="/assets/keycaps/hc.png"
              className="absolute top-24"
              width={96}
              height={96}
              initial={{ left: -0, opacity: 0, rotate: 0 }}
              whileTap={{ scale: 0.8 }}
              whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            />
            <motion.img
              src="/assets/keycaps/flag-standalone.png"
              className="absolute top-72"
              width={96}
              height={96}
              initial={{ left: -0, opacity: 0, rotate: 0 }}
              whileInView={{ left: 60, opacity: 1, rotate: -12 }}
              whileTap={{ scale: 0.8 }}
              transition={{ delay: 0.1 }}
            />
            <motion.img
              src="/assets/keycaps/hcb-light.png"
              className="absolute top-120"
              width={96}
              height={96}
              initial={{ left: -0, opacity: 0, rotate: 0 }}
              whileInView={{ left: 24, opacity: 1, rotate: 12 }}
              whileTap={{ scale: 0.8 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src="/assets/keycaps/hcb-dark.png"
              className="absolute top-24"
              width={96}
              height={96}
              initial={{ right: 12, opacity: 0, rotate: 0 }}
              whileInView={{ right: 24, opacity: 1, rotate: -12 }}
              whileTap={{ scale: 0.8 }}
              transition={{ delay: 0.25 }}
            />
            <motion.img
              src="/assets/keycaps/orph-flag.png"
              className="absolute top-72"
              width={96}
              height={96}
              initial={{ right: 12, opacity: 0, rotate: 0 }}
              whileInView={{ right: 60, opacity: 1, rotate: 12 }}
              whileTap={{ scale: 0.8 }}
              transition={{ delay: 0.3 }}
            />
            <motion.img
              src="/assets/keycaps/ht.png"
              className="absolute top-120"
              width={96}
              height={96}
              initial={{ right: 12, opacity: 0, rotate: 0 }}
              whileInView={{ right: 24, opacity: 1, rotate: -12 }}
              whileTap={{ scale: 0.8 }}
              transition={{ delay: 0.32 }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 md:p-24 p-12 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-3xl">
          <p>
            mechanical keyboards are cool! they can sound really creamy, they
            look good on your desk, and they're really customizable!
          </p>
          <p>
            now you can get your own, <b>for free.</b>
          </p>
          <p>
            and you'll get EXCLUSIVE merch like <b>custom keycaps</b> and{" "}
            <b>desk pads.</b>
          </p>
          <p>
            and, you'll meet a lot of cool hackclubbers when you're at it too.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/OZOSwy6sghk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <p className="text-xl font-bold">Watch the video to learn more!</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-6">
          <b className="text-4xl">Well, how do I get one?</b>
          <p className="text-4xl">You start with a 60% virtual keyboard.</p>
          <p className="text-md">
            keeb model credits:{" "}
            <a
              href="https://www.printables.com/model/1129171-60-percent-keyboard-plate-ansi/files"
              className="underline"
            >
              60 percent keyboard plate (ANSI)
            </a>{" "}
            from{" "}
            <a href="https://www.printables.com/@B20bob" className="underline">
              B20bob
            </a>{" "}
            on Printables,{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              className="underline"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
        <motion.div
          className="bg-gray-700 relative w-full max-w-180"
          initial={{ top: -24, opacity: 0, rotate: -12 }}
          whileInView={{ top: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          <img src="/assets/blank-keebs/60/blank.png" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Customize your virtual keyboard. Add fun colors, keycaps, desk
            pads...
          </b>
          <p className="text-3xl">
            And share it with the community. You&apos;ll be able to see other
            people&apos;s keyboards (and their progress!)
          </p>
        </div>
        <div className="relative">
          <KbdCustomizer claimedCustomKeycaps={7} />
          <motion.div
            className="rounded p-4 text-2xl shadow-md shadow-gray-500 w-fit text-center bg-cover absolute -bottom-12 -right-8 rotate-2"
            style={{ backgroundImage: `url(${paper})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            Click anywhere on the keyboard to customize it!
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Ship one project, get a physical, Hack Club themed, custom keycap
            shipped to you for free!
          </b>
          <p className="text-3xl">
            Then show it off on your virtual keyboard! Everyone gets to see your
            shared project!
          </p>
        </div>
        <div className="flex gap-[5%] w-2/3">
          {KeycapTypes.slice(1).map((k, i) => (
            <motion.img
              src={k}
              className="aspect-square w-1/6"
              initial={{ x: -40, opacity: 0, rotate: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                rotate: (i % 2 === 0 ? -1 : 1) * 12,
              }}
              transition={{ type: "spring", delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Every 15 minutes you make something, one key gets added to your
            keyboard.
          </b>
          <p className="text-4xl">
            Your goal is to complete your virtual keyboard with your keys and
            unlock each of the 3 keyboard tiers! (60%, 75%, 100%)
          </p>
        </div>
        <p className="text-md">
          Keycap model credits:{" "}
          <a
            href="https://www.printables.com/model/118708-simple-cherry-mx-keycap"
            className="underline"
          >
            Simple Cherry MX Keycap
          </a>{" "}
          from{" "}
          <a
            href="https://www.printables.com/@3dNerdcave"
            className="underline"
          >
            3dNerdcave
          </a>{" "}
          on Printables,{" "}
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            className="underline"
          >
            CC BY 4.0
          </a>
        </p>
        <div
          className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative"
          style={{ backgroundImage: `url("/assets/desk-pads/rawr.jpg")` }}
        >
          <div className="bg-gray-700 relative w-full aspect-1925/638">
            <img
              src={"/assets/blank-keebs/60/hackclub-colors.png"}
              className="w-full max-w-180 object-contain h-full"
            />
            <motion.img
              src="/assets/keycaps/hc.png"
              className="absolute top-[20%] left-[10.5%] w-[6%]"
              initial={{ opacity: 0, scale: 2.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Complete your 60% virtual keyboard with 61 keys, and get a 60%
            keyboard IRL, AND a wrist rest, AND 3 total custom keys.
          </b>
          <p className="text-2xl">
            ROYAL KLUDGE R65 or similar 60-65% keyboard. That means 16 hours of
            coding!
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 md:flex flex-col items-center justify-center -rotate-20 hidden"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
              61
            </div>
            <p className="text-3xl">keys</p>
          </motion.div>
          <img src={r65} width={480} />
          <img src={wristrest} width={480} className="absolute -bottom-24" />
        </div>
      </div>
      <div className="flex flex-col gap-12 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Complete a 75% virtual keyboard with 84 keys, and get a 75%
            keyboard, AND a Hack Club-themed mouse pad, and 5 total custom keys.
          </b>
          <p className="text-2xl">
            EPOMAKER X Aula F75 MAX or similar 75%-TKL keyboard and exclusive
            Hack Club mouse pad. That means 21 hours of coding!
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center w-2/3">
          <div className="relative min-w-0 flex-2 object-contain">
            <img src={f75} className="" />
            <motion.div
              className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 md:flex flex-col items-center justify-center -rotate-20 hidden"
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
            >
              <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
                84
              </div>
              <p className="text-3xl">keys</p>
            </motion.div>
          </div>
          <img
            src={customPadS}
            className="rounded-md shadow-gray-500 shadow-md flex-1 min-w-0 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 md:px-24 px-12 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Or, complete a 100% virtual keyboard with 104 keys, and get a
            96-100% keyboard, AND a full size Hack Club-themed desk pad, and 7
            total custom keys!
          </b>
          <p className="text-2xl">
            ROYAL KLUDGE S98, or similar 96%-100% keyboard, and a bigger version
            of the exclusive desk pad above! That means 26 hours of coding!
          </p>
        </div>

        <div className="relative flex flex-col gap-4 items-center">
          <motion.div
            className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 md:flex flex-col items-center justify-center -rotate-20 hidden"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
              104
            </div>
            <p className="text-3xl">keys</p>
          </motion.div>

          <img
            src={s98}
            className="absolute top-1/2 left-1/2 -translate-1/2 z-2 w-2/3"
          />
          <img
            src={customPadM}
            width={720}
            className="rounded-md shadow-gray-500 shadow-md"
          />
        </div>

        <p className="text-xl">
          Want a different keyboard? We'll have alternate keyboards avaliable in
          the shop!
        </p>
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-12 py-24">
        <div className="flex flex-row gap-12 relative items-stretch">
          <motion.div
            className="rounded p-4 text-4xl shadow-md shadow-gray-500 w-full bg-cover flex flex-row gap-12 relative items-center"
            style={{ backgroundImage: `url(${paper})` }}
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col gap-2 flex-1">
              <b>First, sign up!</b>
              <p>
                Any teen 13-18 can start building keyboard-related projects.
              </p>
            </div>
            <img src={signUp} className="max-h-48 h-full" />
          </motion.div>
        </div>
        <div className="h">
          <motion.div
            className="rounded p-4 shadow-md shadow-gray-500 w-full bg-cover flex flex-row gap-12 relative items-center"
            style={{ backgroundImage: `url(${paper})` }}
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <img src={customize} className="min-w-0 object-contain w-100" />
            <div className="flex flex-col gap-2 flex-1">
              <b className="text-4xl">
                Next, customize your own virtual keyboard.
              </b>
              <p className="text-4xl">
                Add fun colors and deskpads! If you claimed custom keycaps, you
                can add them here!
              </p>
              <p className="text-2xl">
                You’ll also be able to see other people’s keyboards.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row gap-12 relative items-stretch">
          <motion.div
            className="rounded p-4 text-4xl shadow-md shadow-gray-500 w-full bg-cover flex flex-row gap-12 relative items-center"
            style={{ backgroundImage: `url(${paper})` }}
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col gap-2 flex-1">
              <b>Start building!</b>
              <p>
                Build any keyboard related project you want! You'll log your
                hours using{" "}
                <a
                  href="https://hackatime.hackclub.com"
                  className="font-bold underline"
                >
                  Hackatime
                </a>
                .
              </p>
            </div>
            <img src={create} className="h-full object-cover  max-h-48" />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:px-24 px-12 py-18">
        <div>
          <h2 className="text-4xl font-bold">FAQ!</h2>
          <p className="text-xl">We know you have questions!</p>
        </div>
        <Collapsible title="How do I join?">
          <p>
            You can RSVP early for the event to express your interest!
            We&apos;ll share additional info when the event goes live.
          </p>
        </Collapsible>
        <Collapsible title="Am I eligible?">
          <p>
            Any teen 13-18 who has not been previously banned can participate.
          </p>
        </Collapsible>
        <Collapsible title="All of this? FOR FREE?!?">
          <p>
            Yep! This event is run by Hack Club, a 501(c)(3) non-profit
            organization d.b.a. Hack Club (EIN: 81-2908499). We provide these
            things for free to teenagers because of our generous sponsors.
          </p>
        </Collapsible>
        <Collapsible title="What can I build?">
          <p>
            Build any project related to keyboards! Software and hardware
            projects are allowed.
          </p>
        </Collapsible>
        <Collapsible title="Will there be different keyboards and accessories in the shop?">
          <p>
            Yep! There will be more keyboards at each tier listed on our shop.
          </p>
        </Collapsible>
        <Collapsible title="Can I pick the custom keycaps I get shipped for free?">
          <p>
            Due to logistical concerns for availability of keycaps (we buy an
            equal amount of keycaps per design), we cannot unfortunately
            guarantee the keycap you get.
          </p>
        </Collapsible>
        <Collapsible title="How can I track time?">
          <p>
            You'll use{" "}
            <a href="https://hackatime.hackclub.com" className="underline">
              Hackatime
            </a>{" "}
            to track project time.
          </p>
        </Collapsible>
        <Collapsible title="Do I have to be committed to this event when I RSVP?">
          <p>Nope! This is just to gauge interest within the community.</p>
        </Collapsible>
        <Collapsible title="How does the shop work?">
          <p>There are 3 tiers: 61-keys, 84-keys, and 104-keys.</p>
          <p>
            Once you complete your virtual keyboard for each tier, that tier
            unlocks in the shop.
          </p>
          <p>
            You can select the standard combination of items for that tier
            (which is listed on this homepage), or you can choose an alternate
            keyboard.
          </p>
          <p>
            Once you purchase items from a tier, that amount of keys from the
            tier is deducted from your key balance.
          </p>
        </Collapsible>
        <Collapsible title="Can I choose a different keyboard?">
          <p>
            Yes! There will be alternative keyboards as listed on the shop. Once
            you complete each of the 3 tiers, you'll be able to select the
            keyboards you want of that form factor.
          </p>
        </Collapsible>
      </div>
      <div className="flex flex-col gap-4 md:px-24 px-12 py-18">
        <div>
          <h2 className="text-4xl font-bold">FAQ for HQ!</h2>
          <p className="text-xl">
            For those interested in adopting this event in Hack Club!
          </p>
        </div>
        <Collapsible title="What's the 'YS' part of this event?">
          <p>
            This is designed to be a keyboard-themed YSWS where you can ship any
            keyboard related project. This way, you can make many projects with
            fewer hours to work up towards a goal, or make one project with many
            hours. I chose this flexibility as I found in my personal experience
            doing YSWS events, that it got tiring doing 1 singular project for
            many hours.
          </p>
        </Collapsible>

        <Collapsible title="Why the 3 tiers of keyboards?">
          <p>
            The 61, 84, and 104 key structure makes sense because once you
            complete your virtual keyboard (which everyone sees, further
            incentivizing the deal), you get that form factor of keyboard in
            real life - and the accessories that come with it. The virtual
            keyboard acts as a visual aid for what people should aim for.
            Additionally, since there's exclusive merch at each tier you
            advance, you're encouraged to spend more time making projects to get
            that merch as well!
          </p>
        </Collapsible>
      </div>
      <div className="p-16 bg-black flex flex-row gap-4 text-white items-start relative">
        <img src={hcFlag} width={128} />
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-2xl font-bold">A Hack Club initative</p>
            <p>
              The Hack Foundation is a 501(c)(3) non-profit organization d.b.a.
              Hack Club (EIN: 81-2908499)
            </p>
            <a href="https://hackclub.com" className="underline">
              About Hack Club
            </a>
          </div>
          <div>
            <p>
              This event is not affiliated or endorsed by any of the keyboard
              companies mentioned above.
            </p>
            <p className="text-md">
              Dino imagery from{" "}
              <a href="https://rawr.hackclub.com" className="underline">
                rawr.hackclub.com
              </a>{" "}
              :3
            </p>
          </div>
          <div>
            <p>
              Made with love by @normalperson543.{" "}
              <a
                href="https://github.com/normalperson543/keebstagram-ysws"
                className="underline"
                target="_blank"
              >
                Open source.
              </a>
            </p>
          </div>
          <img
            src={dinoTired}
            width={128}
            className="absolute bottom-0 right-12"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
