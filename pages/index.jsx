import style from '@/styles/pages/LandingPage.module.scss';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Qanibal</title>

                <meta name="description" content="Qanibal" />
            </Head>

            <div className={style.page}>
                <header>
                    <svg
                        width="254"
                        height="97"
                        viewBox="0 0 254 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_11)">
                            <path
                                d="M253.041 70.2583C253.341 70.436 253.588 70.6926 253.753 71.0004C253.92 71.3211 254.007 71.6772 254.007 72.0386C254.007 72.4 253.92 72.7561 253.753 73.0769C253.588 73.3846 253.341 73.6412 253.041 73.819C252.727 73.9988 252.372 74.0934 252.01 74.0934C251.648 74.0934 251.293 73.9988 250.979 73.819C250.679 73.6414 250.432 73.3847 250.267 73.0769C250.1 72.7563 250.013 72.4001 250.013 72.0386C250.013 71.6772 250.1 71.321 250.267 71.0004C250.432 70.6925 250.679 70.4358 250.979 70.2583C251.293 70.0785 251.648 69.9839 252.01 69.9839C252.372 69.9839 252.727 70.0785 253.041 70.2583V70.2583ZM252.933 73.6494C253.201 73.4904 253.42 73.2602 253.565 72.9845C253.714 72.6931 253.791 72.3705 253.791 72.0433C253.791 71.716 253.714 71.3934 253.565 71.1021C253.42 70.8263 253.201 70.5962 252.933 70.4372C252.651 70.2785 252.333 70.1951 252.01 70.1951C251.687 70.1951 251.369 70.2785 251.087 70.4372C250.819 70.596 250.6 70.8262 250.455 71.1021C250.306 71.3934 250.229 71.716 250.229 72.0433C250.229 72.3705 250.306 72.6931 250.455 72.9845C250.6 73.2604 250.819 73.4906 251.087 73.6494C251.369 73.8081 251.687 73.8915 252.01 73.8915C252.333 73.8915 252.651 73.8081 252.933 73.6494V73.6494ZM252.172 72.1706L252.917 73.182L252.679 73.1926L251.934 72.1706H251.503V73.1926H251.287V70.8873H252.183C252.405 70.8873 252.579 70.943 252.706 71.0542C252.77 71.1133 252.82 71.1855 252.852 71.266C252.885 71.3464 252.899 71.433 252.895 71.5197C252.9 71.6075 252.885 71.6953 252.852 71.777C252.82 71.8588 252.77 71.9325 252.706 71.9931C252.58 72.1083 252.405 72.1657 252.183 72.1653L252.172 72.1706ZM251.503 71.9658H252.161C252.295 71.9732 252.428 71.9355 252.539 71.8588C252.587 71.8186 252.625 71.7674 252.649 71.7096C252.674 71.6518 252.684 71.5889 252.679 71.5263C252.679 71.2395 252.506 71.0961 252.161 71.0961H251.503V71.9658Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M85.8548 54.649C86.8788 52.7168 88.3217 51.2318 90.1835 50.1941C92.0452 49.1563 94.1708 48.6384 96.5601 48.6401C99.4458 48.6401 101.889 49.3902 103.891 50.8902C105.892 52.3903 107.234 54.2997 107.917 56.6185V48.9673H108.801V74.0155H107.917V66.359C107.234 68.6782 105.892 70.5879 103.891 72.0879C101.889 73.588 99.4458 74.338 96.5601 74.338C94.1703 74.338 92.0448 73.8201 90.1835 72.7841C88.3221 71.7482 86.8792 70.2632 85.8548 68.3291C84.8308 66.3969 84.3188 64.1162 84.3188 61.4871C84.3188 58.858 84.8308 56.5786 85.8548 54.649ZM106.451 55.2062C105.476 53.3968 104.126 51.9896 102.401 50.9847C100.677 49.9797 98.7299 49.4773 96.5601 49.4773C94.2634 49.4773 92.2686 49.9567 90.5758 50.9155C88.8829 51.8743 87.5719 53.258 86.6428 55.0666C85.7119 56.8761 85.2464 59.0176 85.2464 61.4911C85.2464 63.9646 85.7119 66.1061 86.6428 67.9156C87.5736 69.7246 88.8846 71.1085 90.5758 72.0673C92.2669 73.0261 94.2616 73.5053 96.5601 73.5049C98.7321 73.5049 100.679 73.0024 102.401 71.9975C104.124 70.9926 105.473 69.5856 106.451 67.7766C107.426 65.9671 107.914 63.8719 107.914 61.4911C107.914 59.1102 107.427 57.0153 106.454 55.2062H106.451Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M140.358 51.1468C142.25 52.9718 143.197 55.7241 143.197 59.4038V74.0154H142.313V59.3107C142.313 56.0335 141.491 53.5365 139.846 51.8197C138.202 50.1029 135.952 49.2447 133.097 49.2451C130.118 49.2451 127.729 50.2115 125.929 52.1442C124.13 54.0769 123.23 56.9296 123.23 60.7024V74.0154H122.299V48.9672H123.23V55.5539C123.819 53.2346 124.998 51.4642 126.767 50.2425C128.536 49.0208 130.646 48.4102 133.097 48.4106C136.045 48.4106 138.465 49.3227 140.358 51.1468Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M156.068 42.2178C155.835 41.9864 155.719 41.685 155.719 41.3135C155.719 40.942 155.835 40.6406 156.068 40.4092C156.299 40.1862 156.608 40.0615 156.929 40.0615C157.25 40.0615 157.559 40.1862 157.79 40.4092C158.023 40.6415 158.139 40.9429 158.139 41.3135C158.139 41.6841 158.023 41.9855 157.79 42.2178C157.559 42.4413 157.25 42.5663 156.929 42.5663C156.608 42.5663 156.299 42.4413 156.068 42.2178V42.2178ZM157.398 48.9674V74.0157H156.467V48.9674H157.398Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M175.872 50.8666C177.827 49.3825 180.247 48.6402 183.133 48.6398C185.522 48.6398 187.648 49.1578 189.51 50.1937C191.372 51.2297 192.815 52.7146 193.839 54.6487C194.863 56.5814 195.375 58.8621 195.375 61.4907C195.375 64.1194 194.863 66.4001 193.839 68.3328C192.815 70.2659 191.372 71.7509 189.51 72.7877C187.648 73.8246 185.523 74.3414 183.133 74.3383C180.247 74.3383 177.811 73.5961 175.825 72.1115C173.839 70.627 172.49 68.7098 171.776 66.3599V74.0139H170.892V39.6899H171.776V56.6208C172.551 54.271 173.917 52.3529 175.872 50.8666ZM193.047 55.0643C192.117 53.2557 190.806 51.872 189.114 50.9132C187.423 49.9543 185.429 49.4749 183.13 49.4749C180.958 49.4749 179.011 49.9774 177.289 50.9823C175.567 51.9872 174.217 53.3944 173.239 55.2039C172.264 57.0125 171.777 59.1074 171.777 61.4887C171.777 63.87 172.264 65.9652 173.239 67.7742C174.217 69.5837 175.567 70.9907 177.289 71.9952C179.011 72.9996 180.958 73.5021 183.13 73.5025C185.426 73.5025 187.421 73.0233 189.114 72.065C190.808 71.1066 192.119 69.7227 193.047 67.9132C193.978 66.1037 194.444 63.9622 194.444 61.4887C194.444 59.0152 193.978 56.8746 193.047 55.0669V55.0643Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M208.08 54.649C209.104 52.7168 210.547 51.2318 212.409 50.1941C214.271 49.1563 216.397 48.6384 218.786 48.6401C221.672 48.6401 224.116 49.3902 226.117 50.8902C228.118 52.3903 229.461 54.2997 230.143 56.6185V48.9673H231.028V74.0155H230.143V66.359C229.461 68.6782 228.118 70.5879 226.117 72.0879C224.116 73.588 221.672 74.338 218.786 74.338C216.397 74.338 214.271 73.8201 212.409 72.7841C210.547 71.7482 209.104 70.2632 208.08 68.3291C207.056 66.3969 206.544 64.1162 206.544 61.4871C206.544 58.858 207.056 56.5786 208.08 54.649ZM228.677 55.2062C227.702 53.3968 226.352 51.9896 224.628 50.9847C222.903 49.9797 220.956 49.4773 218.786 49.4773C216.49 49.4773 214.496 49.9567 212.805 50.9155C211.115 51.8743 209.803 53.258 208.872 55.0666C207.941 56.8761 207.475 59.0176 207.475 61.4911C207.475 63.9646 207.941 66.1061 208.872 67.9156C209.803 69.7246 211.114 71.1085 212.805 72.0673C214.497 73.0261 216.491 73.5053 218.786 73.5049C220.958 73.5049 222.905 73.0024 224.628 71.9975C226.35 70.9926 227.7 69.5856 228.677 67.7766C229.654 65.9671 230.143 63.8719 230.143 61.4911C230.143 59.1102 229.654 57.0153 228.677 55.2062V55.2062Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M245.456 39.6899V74.0159H244.525V39.6899H245.456Z"
                                fill="#3E405B"
                            />
                            <path
                                d="M88.6176 79.502H90.8717V79.6263H88.4727V79.502L90.6509 76.0164H88.5418V75.8921H90.8025V76.0164L88.6176 79.502Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M100.463 79.2319C100.603 79.129 100.722 78.9988 100.811 78.8491C100.9 78.6995 100.958 78.5334 100.981 78.3609H101.12C101.065 78.7364 100.868 79.0766 100.57 79.3117C100.268 79.5538 99.8796 79.6748 99.4049 79.6748C99.0813 79.6806 98.7619 79.602 98.478 79.4467C98.2043 79.2924 97.9819 79.0612 97.8383 78.7818C97.686 78.4621 97.6069 78.1125 97.6069 77.7585C97.6069 77.4044 97.686 77.0548 97.8383 76.7352C97.9817 76.4555 98.2041 76.2243 98.478 76.0702C98.7619 75.9149 99.0813 75.836 99.4049 75.8415C99.7305 75.8326 100.052 75.9128 100.336 76.0735C100.582 76.2157 100.784 76.4227 100.92 76.672C101.051 76.9094 101.119 77.1758 101.12 77.4466C101.12 77.6128 101.12 77.7372 101.113 77.8203H97.7432C97.7477 78.2029 97.8272 78.5231 97.982 78.7811C98.1239 79.0279 98.334 79.2285 98.587 79.3589C98.8398 79.4868 99.1196 79.552 99.4029 79.5491C99.824 79.55 100.177 79.4443 100.463 79.2319ZM98.589 76.1587C98.336 76.2888 98.1259 76.4892 97.9839 76.7358C97.8292 76.9938 97.7497 77.3143 97.7452 77.6973H100.995C101.018 77.3143 100.957 76.9938 100.812 76.7358C100.677 76.4874 100.47 76.2861 100.217 76.1587C99.9642 76.0335 99.6856 75.9685 99.4032 75.9685C99.1208 75.9685 98.8422 76.0335 98.589 76.1587V76.1587Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M109.845 75.8091V75.9614H109.783C109.42 75.9519 109.066 76.0735 108.785 76.3038C108.511 76.5316 108.374 76.8993 108.374 77.4069V79.6264H108.235V75.8922H108.374V76.7985C108.522 76.1389 109.012 75.8091 109.845 75.8091Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M117.405 79.4436C117.129 79.2886 116.902 79.0579 116.752 78.7786C116.595 78.4614 116.514 78.1124 116.514 77.7586C116.514 77.4049 116.595 77.0559 116.752 76.7387C116.902 76.4592 117.128 76.2285 117.405 76.0737C117.693 75.9214 118.013 75.8418 118.339 75.8418C118.664 75.8418 118.985 75.9214 119.272 76.0737C119.549 76.228 119.775 76.4589 119.923 76.7387C120.077 77.0565 120.157 77.4053 120.157 77.7586C120.157 78.112 120.077 78.4608 119.923 78.7786C119.775 79.0583 119.549 79.2892 119.272 79.4436C118.985 79.5955 118.664 79.675 118.339 79.675C118.013 79.675 117.693 79.5955 117.405 79.4436V79.4436ZM119.169 79.3531C119.427 79.2171 119.641 79.0093 119.784 78.7547C119.94 78.4887 120.019 78.1563 120.019 77.7573C120.02 77.3584 119.941 77.0259 119.784 76.7599C119.641 76.5056 119.427 76.2978 119.169 76.1615C118.912 76.0284 118.628 75.9599 118.339 75.962C118.049 75.9603 117.763 76.0288 117.506 76.1615C117.246 76.2966 117.03 76.5045 116.887 76.7599C116.73 77.0295 116.651 77.3601 116.652 77.752C116.652 78.1439 116.731 78.4748 116.887 78.7447C117.03 79.0002 117.246 79.2082 117.506 79.3432C117.763 79.4759 118.049 79.5443 118.339 79.5426C118.627 79.5478 118.912 79.4828 119.169 79.3531V79.3531Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M140.218 75.8921L139.043 79.6263H138.939L137.577 76.1481L136.221 79.6263H136.117L134.942 75.8921H135.088L136.18 79.3776L137.528 75.8921H137.632L138.981 79.3776L140.073 75.8921H140.218Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M147.112 76.7391C147.256 76.4588 147.48 76.2275 147.755 76.0742C148.046 75.9162 148.372 75.8362 148.703 75.8421C149.132 75.8421 149.495 75.9529 149.792 76.1746C150.08 76.3852 150.291 76.6854 150.391 77.0283V75.8873H150.524V79.6215H150.391V78.4805C150.291 78.8235 150.08 79.1239 149.792 79.3349C149.495 79.5566 149.132 79.6674 148.703 79.6674C148.372 79.6735 148.046 79.5937 147.755 79.436C147.48 79.2827 147.256 79.0513 147.112 78.7711C146.962 78.452 146.884 78.1037 146.884 77.7511C146.884 77.3984 146.962 77.0501 147.112 76.7311V76.7391ZM150.171 76.8222C150.034 76.5602 149.825 76.3422 149.569 76.1932C149.307 76.0416 149.008 75.964 148.705 75.9684C148.395 75.9606 148.089 76.0345 147.817 76.1825C147.565 76.3261 147.361 76.5417 147.232 76.8016C147.095 77.1024 147.025 77.429 147.025 77.7594C147.025 78.0898 147.095 78.4164 147.232 78.7172C147.361 78.9769 147.565 79.1923 147.817 79.3356C148.089 79.4839 148.395 79.558 148.705 79.5504C149.008 79.5545 149.307 79.4769 149.569 79.3256C149.825 79.1763 150.034 78.9581 150.171 78.6959C150.315 78.4045 150.389 78.0839 150.389 77.7591C150.389 77.4342 150.315 77.1137 150.171 76.8222V76.8222Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M158.021 79.4262C157.77 79.26 157.624 79.0087 157.583 78.6722H157.719C157.728 78.8008 157.766 78.9257 157.83 79.0376C157.894 79.1496 157.983 79.2456 158.089 79.3185C158.308 79.4732 158.618 79.5506 159.02 79.5506C159.206 79.5545 159.389 79.5141 159.556 79.4329C159.701 79.3625 159.824 79.2537 159.912 79.1184C159.994 78.9914 160.037 78.8437 160.037 78.6928C160.043 78.5449 159.992 78.4002 159.895 78.2886C159.797 78.1828 159.677 78.101 159.542 78.0498C159.353 77.9794 159.16 77.9195 158.965 77.8703C158.74 77.8164 158.52 77.747 158.305 77.6629C158.137 77.5944 157.99 77.4849 157.876 77.3444C157.752 77.1821 157.689 76.9811 157.7 76.7772C157.699 76.6099 157.752 76.4468 157.851 76.3117C157.959 76.1636 158.103 76.0456 158.27 75.9693C158.457 75.8817 158.662 75.8378 158.868 75.841C159.247 75.841 159.551 75.9356 159.781 76.1249C160.012 76.3142 160.136 76.5768 160.155 76.9128H160.016C160.013 76.7839 159.984 76.6569 159.93 76.5398C159.875 76.4226 159.798 76.3179 159.702 76.232C159.506 76.0546 159.228 75.966 158.868 75.966C158.687 75.9632 158.508 76.0009 158.343 76.0764C158.196 76.1422 158.069 76.2445 157.973 76.3736C157.887 76.4889 157.84 76.6288 157.84 76.7725C157.831 76.9502 157.888 77.1249 157.999 77.2639C158.103 77.3875 158.238 77.4827 158.389 77.5405C158.592 77.6156 158.799 77.6801 159.008 77.734C159.218 77.79 159.424 77.8566 159.627 77.9335C159.775 77.9921 159.907 78.0857 160.011 78.2061C160.121 78.3412 160.178 78.5125 160.17 78.6868C160.172 78.8656 160.118 79.0407 160.017 79.1882C159.913 79.3407 159.77 79.4626 159.603 79.5413C159.419 79.6283 159.218 79.6719 159.015 79.6689C158.604 79.6729 158.273 79.592 158.021 79.4262Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M167.56 76.0303V78.6441C167.552 78.8203 167.578 78.9963 167.636 79.1628C167.658 79.2187 167.69 79.2698 167.732 79.3132C167.773 79.3565 167.823 79.3913 167.878 79.4154C168.027 79.4704 168.185 79.4951 168.343 79.4879H168.738V79.6262H168.329C168.007 79.6262 167.775 79.5524 167.635 79.4048C167.494 79.2572 167.424 79.0036 167.424 78.6441V76.0303H166.815V75.892H167.424V74.9365H167.56V75.8907H168.736V76.029L167.56 76.0303Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M178.398 79.2319C178.539 79.1288 178.657 78.9985 178.746 78.8489C178.835 78.6993 178.893 78.5334 178.917 78.3609H179.055C179 78.7363 178.803 79.0764 178.506 79.3117C178.204 79.5538 177.815 79.6748 177.34 79.6748C177.017 79.6805 176.697 79.6019 176.414 79.4467C176.14 79.2926 175.917 79.0613 175.774 78.7818C175.621 78.4623 175.542 78.1126 175.542 77.7585C175.542 77.4043 175.621 77.0547 175.774 76.7352C175.917 76.4554 176.14 76.2241 176.414 76.0702C176.697 75.9148 177.017 75.836 177.34 75.8415C177.666 75.8326 177.987 75.9128 178.271 76.0735C178.517 76.2153 178.719 76.4224 178.855 76.672C178.986 76.9093 179.054 77.1757 179.055 77.4466C179.055 77.6128 179.055 77.7372 179.047 77.8203H175.679C175.684 78.2029 175.763 78.5231 175.918 78.7811C176.06 79.0278 176.27 79.2283 176.523 79.3589C176.776 79.4866 177.055 79.5519 177.339 79.5491C177.758 79.55 178.111 79.4443 178.398 79.2319ZM176.524 76.1587C176.271 76.289 176.061 76.4893 175.919 76.7358C175.765 76.9938 175.685 77.3143 175.68 77.6973H178.93C178.954 77.3143 178.893 76.9938 178.748 76.7358C178.612 76.4876 178.405 76.2864 178.152 76.1587C177.899 76.0335 177.621 75.9685 177.338 75.9685C177.056 75.9685 176.777 76.0335 176.524 76.1587V76.1587Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M196.971 79.2319C197.112 79.1289 197.23 78.9988 197.319 78.8491C197.408 78.6995 197.466 78.5334 197.49 78.3609H197.628C197.573 78.7364 197.376 79.0766 197.078 79.3117C196.776 79.5537 196.388 79.6747 195.913 79.6747C195.59 79.6806 195.27 79.602 194.986 79.4467C194.712 79.2925 194.49 79.0613 194.347 78.7817C194.194 78.4621 194.115 78.1125 194.115 77.7584C194.115 77.4044 194.194 77.0548 194.347 76.7351C194.49 76.4553 194.712 76.224 194.986 76.0702C195.27 75.9148 195.59 75.836 195.913 75.8415C196.239 75.8327 196.561 75.9129 196.844 76.0735C197.09 76.2155 197.292 76.4226 197.428 76.672C197.558 76.9093 197.627 77.1757 197.627 77.4466C197.627 77.6128 197.627 77.7372 197.62 77.8203H194.253C194.257 78.2028 194.336 78.5231 194.491 78.7811C194.633 79.0276 194.843 79.2281 195.096 79.3589C195.349 79.4867 195.629 79.5519 195.913 79.5491C196.332 79.55 196.685 79.4442 196.971 79.2319ZM195.097 76.1586C194.844 76.2891 194.634 76.4895 194.492 76.7358C194.337 76.9938 194.258 77.3143 194.254 77.6973H197.504C197.526 77.3143 197.465 76.9938 197.32 76.7358C197.185 76.4875 196.978 76.2862 196.726 76.1586C196.472 76.0335 196.194 75.9684 195.911 75.9684C195.629 75.9684 195.35 76.0335 195.097 76.1586Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M205.94 79.4186L207.434 75.8945H207.579L205.988 79.6287H205.884L204.294 75.8945H204.446L205.94 79.4186Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M217.101 79.2319C217.241 79.1289 217.36 78.9988 217.449 78.8491C217.538 78.6995 217.596 78.5334 217.62 78.3609H217.758C217.703 78.7364 217.506 79.0766 217.208 79.3117C216.906 79.5537 216.518 79.6747 216.043 79.6747C215.72 79.6806 215.4 79.602 215.116 79.4467C214.842 79.2925 214.62 79.0613 214.477 78.7817C214.324 78.4621 214.245 78.1125 214.245 77.7584C214.245 77.4044 214.324 77.0548 214.477 76.7351C214.62 76.4553 214.842 76.224 215.116 76.0702C215.4 75.9148 215.719 75.836 216.043 75.8415C216.369 75.8327 216.691 75.9129 216.974 76.0735C217.22 76.2157 217.422 76.4227 217.558 76.672C217.689 76.9094 217.757 77.1758 217.758 77.4466C217.758 77.6128 217.758 77.7372 217.751 77.8203H214.383C214.388 78.2028 214.468 78.5231 214.622 78.7811C214.764 79.0279 214.974 79.2285 215.227 79.3589C215.48 79.4868 215.76 79.552 216.043 79.5491C216.463 79.55 216.815 79.4442 217.101 79.2319ZM215.227 76.1586C214.974 76.2888 214.764 76.4892 214.622 76.7358C214.467 76.9938 214.387 77.3143 214.383 77.6973H217.634C217.656 77.3143 217.595 76.9938 217.45 76.7358C217.315 76.4874 217.108 76.2861 216.856 76.1586C216.602 76.0335 216.324 75.9684 216.041 75.9684C215.759 75.9684 215.48 76.0335 215.227 76.1586V76.1586Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M227.557 76.217C227.838 76.4887 227.978 76.899 227.978 77.4477V79.626H227.845V77.4318C227.845 76.9442 227.723 76.572 227.479 76.3154C227.235 76.0587 226.9 75.9308 226.476 75.9317C226.033 75.9317 225.678 76.0758 225.412 76.3639C225.146 76.652 225.013 77.0772 225.013 77.6392V79.624H224.876V75.8898H225.009V76.8719C225.08 76.5517 225.267 76.2693 225.535 76.08C225.812 75.8934 226.141 75.7979 226.475 75.8067C226.916 75.808 227.277 75.9448 227.557 76.217Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M235.53 76.0303V78.6441C235.522 78.8203 235.548 78.9963 235.606 79.1628C235.65 79.2757 235.737 79.3665 235.848 79.4154C235.996 79.4704 236.155 79.4951 236.313 79.4879H236.707V79.6262H236.299C235.976 79.6262 235.745 79.5524 235.604 79.4048C235.464 79.2572 235.393 79.0036 235.393 78.6441V76.0303H234.784V75.892H235.392V74.9365H235.53V75.8907H236.706V76.029L235.53 76.0303Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M243.893 79.4262C243.642 79.26 243.495 79.0087 243.454 78.6722H243.592C243.601 78.8009 243.639 78.9258 243.703 79.0377C243.767 79.1496 243.856 79.2456 243.962 79.3185C244.181 79.4732 244.491 79.5506 244.893 79.5506C245.079 79.5545 245.262 79.5141 245.429 79.4329C245.574 79.3626 245.698 79.2538 245.785 79.1184C245.867 78.9915 245.91 78.8437 245.91 78.6928C245.916 78.5449 245.865 78.4002 245.768 78.2885C245.671 78.1828 245.55 78.1011 245.416 78.0498C245.227 77.9794 245.034 77.9195 244.838 77.8703C244.613 77.8162 244.393 77.7469 244.178 77.6629C244.01 77.5942 243.863 77.4847 243.749 77.3444C243.625 77.182 243.563 76.9811 243.573 76.7772C243.572 76.6097 243.626 76.4466 243.725 76.3117C243.833 76.1635 243.977 76.0455 244.143 75.9693C244.33 75.8818 244.535 75.838 244.742 75.841C245.119 75.841 245.423 75.9356 245.654 76.1249C245.884 76.3142 246.009 76.5768 246.028 76.9128H245.888C245.885 76.7839 245.855 76.657 245.801 76.5399C245.747 76.4229 245.669 76.3181 245.573 76.2319C245.377 76.0546 245.099 75.966 244.74 75.966C244.559 75.9632 244.379 76.0009 244.214 76.0763C244.068 76.142 243.94 76.2444 243.845 76.3736C243.759 76.489 243.712 76.6288 243.712 76.7725C243.703 76.9502 243.76 77.1249 243.871 77.2639C243.975 77.3876 244.11 77.4827 244.262 77.5405C244.464 77.6157 244.671 77.6803 244.881 77.734C245.09 77.79 245.296 77.8566 245.499 77.9335C245.647 77.9921 245.779 78.0856 245.883 78.2061C245.994 78.3413 246.05 78.5125 246.042 78.6868C246.044 78.8671 245.99 79.0436 245.888 79.1922C245.783 79.3446 245.64 79.4664 245.473 79.5452C245.289 79.6321 245.088 79.6758 244.885 79.6729C244.476 79.6742 244.145 79.592 243.893 79.4262Z"
                                fill="#3F405B"
                            />
                            <path
                                d="M81.6745 79.3751C81.5099 79.4096 81.3385 79.3825 81.1926 79.2989C81.0468 79.2153 80.9367 79.0811 80.8832 78.9217C78.3944 71.6541 71.2179 70.8668 69.531 70.9685C66.2875 71.1634 62.7881 72.5783 59.2879 73.5976C57.5338 74.109 41.0179 81.7908 30.6511 80.6997C9.16347 78.2242 -2.25324 62.9955 0.37121 44.9448C2.76493 28.4894 19.5522 14.3797 36.144 16.1005C70.6162 19.6758 65.5528 51.2636 64.7456 56.4819C64.725 56.6359 64.656 56.7795 64.5484 56.8916C64.4408 57.0037 64.3002 57.0787 64.1472 57.1056C64.0516 57.1216 63.9537 57.1158 63.8608 57.0885C63.7678 57.0612 63.6823 57.0131 63.6107 56.9479C63.539 56.8828 63.4831 56.8021 63.4471 56.7122C63.4112 56.6223 63.3961 56.5253 63.4031 56.4287C63.7455 52.0961 63.6132 26.1788 34.9012 23.9732C22.3282 23.0077 11.6955 33.2908 9.7845 45.7161C7.66872 59.4853 17.7336 70.7498 31.4789 72.196C37.424 72.8217 54.7877 66.8567 57.109 66.1804C60.7301 65.1259 67.8807 64.1737 70.6767 64.7981C73.4727 65.4224 80.1851 65.5847 82.2004 78.5912C82.23 78.7656 82.1911 78.9446 82.0921 79.0911C81.993 79.2376 81.8413 79.3403 81.6685 79.3778L81.6745 79.3751Z"
                                fill="#3F405B"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_11">
                                <rect
                                    width="254"
                                    height="96.8126"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </header>

                <main>
                    <h1>Qanibal GR</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure tempora tenetur, recusandae officia porro rem saepe
                        enim ea architecto, harum vero maxime ab aliquid.
                    </p>

                    <section>
                        <h2>Πολιτική Απορρήτου</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus sunt dolore autem.
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;
