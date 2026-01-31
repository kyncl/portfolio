export const AboutMe = () => {
    return (
        <div className="min-h-screen flex flex-col items-center subtle subtle-always hide">
            <h2 className="text-5xl font-semibold">About me</h2>
            <div className="text-justify p-10 text-3xl md:max-w-4xl">
                <p className="pb-3">
                    Heya 👋, my name is Jan. I'm from the Czech Republic, and I am currently studying Computer Science.
                    I enjoy almost everything in the IT world, but my main focus is backend development.
                    Despite that, I still kind of enjoy working with frontend technologies like React.
                </p>
                {/* <p className="pb-3">
                    In my early developer years I also did some game development.
                    I learned a lot from this experience (like C# can be cool and also not),
                    but mostly I found out the hard way that games are hard to do alone.
                    So I left the game environment kind of frustrated and moved on.
                    During that in my High school (yes I was like 15) we started to do some PHP.
                    And who would have guessed it PHP was great and kinda still is. I like PHP ok?
                    But of course I wanted to try something new/special, so I tried to look for something fun or interesting.
                </p>
                <p className="pb-3">
                    In that Era I experimented with anything that I see as a potential "main language"
                    like Python and not only that I tried to tinker with idea that was kind of Taboo for me back then.
                    And that was changing my main OS. Who would have guessed I chose Linux (sadly no <a className="text-blue-500 mx-1 underline" href="https://en.wikipedia.org/wiki/TempleOS" target="_blank">TempleOS</a>),
                    especially Arch-linux, and what can I say except I fell in love with Linux.
                    This experience taught me so much about how an OS interacts
                    with my code—even if my code back then wasn't exactly "Google-worthy" (yet).
                </p>
                <p className="pb-3">
                    With that I started again with learning new language.
                    After some doom-scrolling on youtube (I believe back then no one used this term. It was like 2023)
                    I got video about glazing Rust. Of course there was a mention that
                    it can be pretty hard language, but me full of myself, would think "ye, I can do that".
                    So I started to read <a className="text-blue-500 mx-1 underline" href="https://doc.rust-lang.org/book/" target="_blank">The Bible</a> and
                    well I struggled ... I struggled a lot. I struggled so much I was on brink of leaving it behind,
                    but when I thought it's <a className="text-blue-500 mx-1 underline" href="https://www.youtube.com/watch?v=dsx2vdn7gpY" target="_blank">game over</a>, I found <a className="text-blue-500 underline" href="https://www.youtube.com/@letsgetrusty" target="_blank">Let's get rusty</a> and he kind of saved me.
                    Thanks to his videos I learned pretty much all the fundamentals like ownership, what is stack and heap, etc...
                </p>
                <p className="pb-3">
                    With this I started building things like <a className="text-blue-500 mx-1 underline" href="https://github.com/kyncl/rata-sorter" target="_blank">Rata sorter</a> (CLI
                    app for visualizing sorting algorithms), where I learned again a lot like sorting algorithms (duh), rata-tui library and importantly
                    async Rust (to be specific <a className="text-blue-500 mx-1 underline" href="https://tokio.rs/" target="_blank">Tokio</a>), which was
                    one of the core parts of my final project in my High school.
                </p>
                I know this could be really long thing to read, but this was pretty much just my starting stone of me and IT (this is pretty much TLDR),
                but I think it perfectly illustrates what dev I'm and what developer I'm aiming to be (second <a className="text-blue-500 mx-1 underline" href="https://en.wikipedia.org/wiki/Terry_A._Davis" target="_blank">Terry</a>). */}
            </div>
        </div>
    );
};
