const Loader =()=> {
    return <div className="bg-black fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="ring">Loading
            <span></span>
        </div>
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            width="500"
            height="500"
        >
            <source src="./assets/video/loading.mov" type="video/mov"></source>
        </video> */}
    </div>
}

export default Loader;