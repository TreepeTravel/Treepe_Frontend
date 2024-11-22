"use client";

export default function CreateNew() {
  return (
    <div className="bg-gray-100  min-h-screen p-6">
      <div className="max-w-8xl mx-auto px-10 bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex flex-col w-full  items-center justify-center  ">
          <h1 className="text-2xl text-gray-600 font-bold mb-5">
            Create itinerary
          </h1>
          <div className=" border flex items-center justify-between border-gray-300 px- py-4 rounded-lg text-lg font-semibold focus:outline-none focus:ring focus:ring-green-400 w-full mb-6">
            <div className="w-full items-center flex justify-start ">
              {" "}
              <input
                type="text"
                placeholder="Add a Title to your Journey"
                className="  max-w-[18rem] text-xl w-full text-gray-800 placeholder-gray-500  py-3 px-4 rounded-lg outline-none transition-shadow shadow-sm hover:shadow-md focus:ring-0"
              />
              <button className="p-2 hover:bg-gray-200 rounded-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_462_2971)">
                    <path
                      d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z"
                      fill="#404040"
                    />
                    <path
                      d="M9.45547 10.5441L8.66647 14.1581C8.63076 14.322 8.63686 14.4923 8.68422 14.6532C8.73158 14.8142 8.81867 14.9606 8.93747 15.0791C9.05791 15.1946 9.20441 15.2793 9.36456 15.3261C9.52472 15.373 9.6938 15.3805 9.85747 15.3481L13.4635 14.5571C13.6507 14.516 13.8222 14.4219 13.9575 14.2861L23.0715 5.1721C23.3501 4.89351 23.5711 4.56277 23.7219 4.19876C23.8727 3.83475 23.9503 3.4446 23.9503 3.0506C23.9503 2.65659 23.8727 2.26644 23.7219 1.90243C23.5711 1.53842 23.3501 1.20768 23.0715 0.929096C22.5003 0.383232 21.7406 0.0786133 20.9505 0.0786133C20.1604 0.0786133 19.4007 0.383232 18.8295 0.929096L9.72947 10.0521C9.59289 10.1865 9.49779 10.3572 9.45547 10.5441ZM20.2435 2.3441C20.4337 2.16184 20.687 2.06009 20.9505 2.06009C21.2139 2.06009 21.4672 2.16184 21.6575 2.3441C21.8425 2.53272 21.9461 2.78639 21.9461 3.0506C21.9461 3.3148 21.8425 3.56847 21.6575 3.7571L20.9505 4.4641L19.5365 3.0501L20.2435 2.3441ZM11.3435 11.2581L18.1175 4.4671L19.5175 5.8741L12.7405 12.6671L10.9455 13.0611L11.3435 11.2581Z"
                      fill="#404040"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_462_2971">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="flex w-1/2 items-center  gap-7">
              <button className="font-bold flex gap-1 items-center justify-center border-green-600 border-2 rounded-md text-green-700 capitalize p-2 text-sm">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 7.5C22.5 8.3885 22.1137 8.95068 21.5 9.5H3.42052C2.85309 8.96729 2.5 8.3495 2.5 7.5V6.5C2.5 4.84315 3.84315 3.5 5.5 3.5H19.5C21.1569 3.5 22.5 4.84315 22.5 6.5V7.5Z"
                    fill="#218B00"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 11.5V18.5C3.5 20.1569 4.84315 21.5 6.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V11.5H3.5ZM8.5 14.5C8.5 13.9477 8.94772 13.5 9.5 13.5H15.5C16.0523 13.5 16.5 13.9477 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H9.5C8.94772 15.5 8.5 15.0523 8.5 14.5Z"
                    fill="#218B00"
                  />
                </svg>
                Save to draft
              </button>
              <button className="px-4 font-bold flex gap-2 items-center justify-center border-green-600 border-2 rounded-md text-green-700 capitalize p-2 text-sm">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8177 11.9261C23.6351 11.6652 19.409 5.45654 12.0003 5.45654C4.59162 5.45654 0.365532 11.6652 0.182923 11.9261C-0.0518597 12.2652 -0.0518597 12.7348 0.182923 13.1C0.365532 13.3348 4.59162 19.5435 12.0003 19.5435C19.409 19.5435 23.6351 13.3348 23.8177 13.0739C24.0525 12.7348 24.0525 12.2652 23.8177 11.9261ZM12.0003 17.4565C6.96553 17.4565 3.52205 13.9087 2.34814 12.5C3.52205 11.0652 6.93944 7.5435 12.0003 7.5435C17.0351 7.5435 20.4786 11.0913 21.6525 12.5C20.4525 13.9348 17.0351 17.4565 12.0003 17.4565ZM12.6003 8.22176C11.4525 8.06524 10.3307 8.35219 9.39162 9.05654C7.48727 10.4913 7.09597 13.2044 8.53075 15.1087C9.2351 16.0478 10.2264 16.6218 11.3742 16.8044C11.5829 16.8305 11.7916 16.8565 11.9742 16.8565C12.9134 16.8565 13.8003 16.5435 14.5568 15.9957C16.4612 14.5609 16.8525 11.8478 15.4177 9.9435C14.7655 8.97828 13.7481 8.37828 12.6003 8.22176ZM13.6438 14.7174C13.0699 15.1609 12.3394 15.3435 11.609 15.2392C10.8786 15.1348 10.2264 14.7435 9.78292 14.1696C8.89597 12.9435 9.13075 11.1957 10.3568 10.2826C10.9307 9.83915 11.6612 9.65654 12.3916 9.76089C13.1221 9.86524 13.7742 10.2565 14.2177 10.8305C15.1047 12.0565 14.8699 13.8044 13.6438 14.7174ZM13.5394 10.9348C13.7481 11.1174 13.8525 11.4044 13.8525 11.6652C13.8525 11.9261 13.7481 12.2131 13.5394 12.3957C13.3568 12.5783 13.0699 12.7087 12.809 12.7087C12.5221 12.7087 12.2612 12.6044 12.0786 12.3957C11.8699 12.187 11.7655 11.9261 11.7655 11.6652C11.7655 11.3783 11.8699 11.1174 12.0786 10.9348C12.2612 10.7261 12.5481 10.6218 12.809 10.6218C13.096 10.6478 13.3568 10.7522 13.5394 10.9348Z"
                    fill="#218B00"
                  />
                </svg>
                Preview
              </button>
              <button className=" px-6 font-bold flex gap-1 items-center justify-center bg-green-600 border-2 rounded-md text-white capitalize p-2 text-sm">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_462_2966)">
                    <path
                      d="M5.5 4.5V6.5H19.5V4.5H5.5ZM5.5 14.5H9.5V20.5H15.5V14.5H19.5L12.5 7.5L5.5 14.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_462_2966">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Publish
              </button>
            </div>
          </div>
          <div className="flex w-full border border-gray-300 px-4 rounded-lg mb-10 py-4 items-center justify-between">
            <div className="w-2/3">
              <div>
                <h1 className="text-gray-800 font-bold text-2xl">
                  Itinerary Info
                </h1>
                <p
                  className="text-[#565973] text-sm font-medium mt-1"
                >
                  Add a basic information to your Travel itinerary{" "}
                </p>
              </div>
            </div>
            <div className=" gap-5  flex justify-center items-center ">
              <div className=" px-3 h-10 flex items-center justify-center  rounded-lg bg-green-100 focus:outline-none focus:ring-0 focus:ring-green-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C11.9962 20.1221 11.7613 19.2607 11.3189 18.5023C10.8766 17.744 10.2423 17.1155 9.48 16.68C9.77983 16.228 9.9515 15.7032 9.97675 15.1614C10.002 14.6196 9.87988 14.081 9.62338 13.6031C9.36689 13.1252 8.98562 12.7257 8.52014 12.4472C8.05467 12.1688 7.52241 12.0217 6.98 12.0217C6.43759 12.0217 5.90533 12.1688 5.43986 12.4472C4.97438 12.7257 4.59311 13.1252 4.33662 13.6031C4.08012 14.081 3.958 14.6196 3.98325 15.1614C4.0085 15.7032 4.18017 16.228 4.48 16.68C3.72511 17.1205 3.09888 17.7512 2.66373 18.5092C2.22859 19.2672 1.99974 20.126 2 21V22H12V21Z"
                    fill="black"
                  />
                  <path
                    d="M12 2.00003C10.6868 2.00003 9.38642 2.25868 8.17317 2.76123C6.95991 3.26378 5.85752 4.00037 4.92893 4.92896C3.05357 6.80432 2 9.34786 2 12H4C4.00105 10.4852 4.43215 9.00189 5.24314 7.7225C6.05414 6.4431 7.2117 5.42025 8.58119 4.77291C9.95069 4.12556 11.4758 3.88034 12.9792 4.06575C14.4826 4.25116 15.9025 4.85959 17.0736 5.82028C18.2448 6.78096 19.1192 8.05441 19.595 9.49251C20.0709 10.9306 20.1286 12.4743 19.7616 13.9439C19.3946 15.4135 18.6179 16.7488 17.5218 17.7943C16.4257 18.8399 15.0553 19.5527 13.57 19.85L13.96 21.85C16.4486 21.4188 18.6819 20.062 20.2112 18.0519C21.7405 16.0419 22.4526 13.5276 22.2044 11.0142C21.9562 8.50075 20.7662 6.17431 18.8733 4.5022C16.9804 2.83009 14.5249 1.93618 12 2.00003Z"
                    fill="black"
                  />
                  <path
                    d="M11 6V12.41L14.29 15.71L15.71 14.29L13 11.59V6H11Z"
                    fill="black"
                  />
                </svg>

                <select className="bg-green-100 text-black focus:outline-none">
                  <option>Duration</option>
                  <option>1 Day</option>
                  <option>3 Days</option>
                  <option>1 Week</option>
                </select>
              </div>

              <div className=" flex items-center justify-center px-3 h-10 rounded-lg bg-green-100 focus:outline-none focus:ring-0 focus:ring-green-400">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5002 1.5C19.1074 1.50242 18.7188 1.58236 18.3569 1.73526C17.995 1.88816 17.6668 2.111 17.3912 2.391L13.9697 5.8125L5.34473 4.266C5.22818 4.24408 5.10813 4.24961 4.99409 4.28216C4.88005 4.3147 4.77516 4.37337 4.68773 4.4535L2.57873 6.609C2.23973 6.9675 2.39873 7.656 2.85923 7.8285L9.65723 10.125L6.23274 13.5465L4.82723 13.266C4.70701 13.25 4.58471 13.2629 4.47045 13.3036C4.3562 13.3443 4.25329 13.4116 4.17023 13.5L2.01473 15.609C1.67573 15.9675 1.83473 16.656 2.29523 16.8285L5.71823 18.282L7.17024 21.702C7.34273 22.1655 8.03123 22.323 8.38973 21.984L10.5002 19.83C10.5886 19.7469 10.6559 19.644 10.6966 19.5298C10.7373 19.4155 10.7502 19.2932 10.7342 19.173L10.4537 17.814L13.8752 14.391L16.1717 21.141C16.3307 21.6375 17.0837 21.8055 17.4377 21.4215L19.5467 19.266C19.6351 19.1829 19.7024 19.08 19.7431 18.9658C19.7838 18.8515 19.7967 18.7292 19.7807 18.609L18.2357 9.984L21.6107 6.609C22.1695 6.04934 22.4833 5.29083 22.4833 4.5C22.4833 3.70917 22.1695 2.95066 21.6107 2.391C21.335 2.11082 21.0065 1.88788 20.6444 1.73498C20.2822 1.58207 19.8934 1.50222 19.5002 1.5Z"
                    fill="black"
                  />
                </svg>

                <select className="bg-green-100 text-black focus:outline-none">
                  <option>Travel Type</option>
                  <option>Leisure</option>
                  <option>Business</option>
                  <option>Adventure</option>
                </select>
              </div>

              <div className=" px-3 h-10 flex items-center justify-center  rounded-lg bg-green-100 focus:outline-none focus:ring-0 focus:ring-green-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C6.61519 2.25 2.25 6.61523 2.25 12C2.25 17.3848 6.61519 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61523 17.3848 2.25 12 2.25ZM10.9899 20.2968C9.14002 20.0753 7.42842 19.2472 6.09056 17.9094C4.51209 16.3309 3.64284 14.2323 3.64284 12C3.64284 9.99047 4.34766 8.0895 5.63977 6.57848C5.67305 6.97772 5.75522 7.40573 5.73417 7.71169C5.6573 8.82708 5.54723 9.52514 6.20011 10.4662C6.45445 10.8327 6.51694 11.3581 6.64073 11.7823C6.76181 12.1973 7.24552 12.415 7.57913 12.6707C8.2522 13.1868 8.89612 13.7866 9.60984 14.2408C10.0809 14.5405 10.3751 14.6896 10.2372 15.2645C10.1262 15.7268 10.0952 16.0115 9.85608 16.4234C9.78309 16.549 10.1316 17.357 10.2475 17.473C10.599 17.8244 10.9478 18.1468 11.3309 18.4632C11.9248 18.954 11.2732 19.5916 10.9899 20.2968ZM17.9094 17.9094C16.7078 19.1109 15.2047 19.9009 13.5708 20.2101C13.8024 19.6374 14.2147 19.1287 14.5972 18.8337C14.9298 18.577 15.3465 18.0833 15.5203 17.6922C15.6939 17.3017 15.9239 16.9631 16.1567 16.6039C16.4879 16.093 15.3402 15.3225 14.9683 15.1611C14.1314 14.7977 13.5014 14.3075 12.7576 13.7841C12.2277 13.4113 11.1518 13.9788 10.5535 13.7177C9.73411 13.3599 9.05902 12.7382 8.34675 12.2018C7.61175 11.6482 7.64728 11.0029 7.64728 10.1863C8.223 10.2075 9.042 10.027 9.42422 10.49C9.54483 10.6361 9.95953 11.2888 10.2371 11.0569C10.4639 10.8674 10.0691 10.1077 9.99281 9.92911C9.7582 9.37997 10.5274 9.1658 10.9211 8.79342C11.4348 8.30761 12.5369 7.5457 12.4498 7.19747C12.3627 6.84923 11.3471 5.86261 10.7506 6.01655C10.6612 6.03961 9.87417 6.86484 9.72211 6.99431C9.72614 6.72497 9.73017 6.45567 9.7343 6.18633C9.73687 6.01627 9.41705 5.8417 9.43191 5.73202C9.46941 5.4548 10.2411 4.95169 10.433 4.73091C10.2985 4.64686 9.83963 4.25269 9.70073 4.31053C9.36445 4.45069 8.98467 4.54725 8.64839 4.68736C8.64839 4.57073 8.63423 4.46119 8.61736 4.353C9.29456 4.05342 10.0089 3.84607 10.7413 3.7365L11.4015 4.00181L11.8676 4.55498L12.3328 5.03466L12.7394 5.16567L13.3853 4.55653L13.2188 4.12167V3.73078C14.4961 3.91631 15.7024 4.39284 16.7588 5.12766C16.5698 5.14458 16.3621 5.17238 16.1278 5.20219C16.031 5.145 15.9068 5.11903 15.8013 5.07923C16.1075 5.73745 16.4268 6.38658 16.7512 7.03608C17.0978 7.72987 17.8665 8.47406 18.0015 9.20644C18.1606 10.0697 18.0502 10.8538 18.1373 11.8695C18.2211 12.8475 19.2399 13.9588 19.2399 13.9588C19.2399 13.9588 19.7104 14.119 20.1017 14.0632C19.737 15.5062 18.9892 16.8295 17.9094 17.9094Z"
                    fill="black"
                  />
                </svg>

                <select className="bg-green-100 text-black focus:outline-none">
                  <option>Privacy</option>
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
              <button className=" p-2 rounded-lg hover:bg-gray-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Itinerary Info */}

        {/* Days */}
        <div className="space-y-6">
          {/* Day 1 */}
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-bold mb-2">Day 1</h3>
            <textarea
              placeholder="Write your travel itinerary here..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              rows="3"
            ></textarea>
          </div>

          {/* Day 2 */}
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-bold mb-2">Day 2</h3>
            <textarea
              placeholder="Write your travel itinerary here..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              rows="3"
            ></textarea>
            <div className="mt-4">
              <input
                type="file"
                className="file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
            </div>
          </div>

          {/* Add more days */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Add Day
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-4">
          <button className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300">
            Save as Draft
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Preview
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
