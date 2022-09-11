import { StarIcon } from '@/components/Icons/Icons';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import SingleSponsor from './SingleSponsor/SingleSponsor';
import style from './Sponsors.module.scss';

const Sponsors = () => {
    const { locale } = useLocaleContext();
    const { title, description, sponsors } = text[locale].sponsors;

    return (
        <div className={`section ${style.sponsors}`} id="sponsors">
            <svg
                className={style['leaves-top']}
                width="50"
                height="100"
                viewBox="0 0 50 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_152_35)">
                    <path
                        d="M48.2135 43.0891C48.8116 42.0377 49.4418 41.2027 49.7957 40.7404C49.4027 40.4151 48.9751 40.0755 48.5128 39.7216C47.5539 40.664 44.4237 43.711 42.6713 44.6088C40.5472 45.718 33.759 48.8732 33.759 48.8732C33.759 48.8732 37.3935 45.5886 39.5311 43.9572C41.2681 42.6064 46.0234 39.9486 47.6718 39.0077C47.2095 38.6538 46.7269 38.2508 46.2443 37.8478C44.8384 38.8892 40.9806 41.6347 38.9629 42.585C36.4551 43.7382 31.8203 44.5378 31.8203 44.5378C31.8203 44.5378 36.5581 43.2937 38.067 41.8078C39.5902 40.2872 40.5457 39.0592 42.5693 38.1926C43.8089 37.6506 44.7603 37.3141 45.285 37.1255C44.6782 36.6305 44.0713 36.1354 43.4298 35.626C42.4566 36.6031 39.6146 39.4447 37.8622 40.3425C35.738 41.4517 29.2938 44.9524 29.2938 44.9524C29.2938 44.9524 32.4858 42.54 34.4551 40.4329C36.1278 38.6495 41.1078 35.8412 42.6092 34.9612C42.3058 34.7137 42.0023 34.4661 41.6643 34.2042C40.6648 35.0486 37.309 37.7586 35.4036 38.6336C33.1062 39.671 25.0943 42.6439 25.0943 42.6439C25.0943 42.6439 28.7511 40.3835 31.0669 38.4199C33.0168 36.7514 39.0591 34.2209 40.8089 33.525C40.2917 33.1077 39.7744 32.6904 39.2572 32.2731C38.5196 32.7794 36.0905 34.3306 34.5282 35.0636C32.6575 35.9529 30.1007 37.1264 28.3721 38.3589C26.6291 39.6259 23.8638 41.8904 23.8638 41.8904C23.8638 41.8904 29.786 35.5345 32.527 34.1125C34.7001 32.9831 37.6356 32.1695 38.789 31.8354C38.1272 31.277 37.4654 30.7186 36.769 30.1458C35.7635 30.9066 32.5656 33.2354 29.8668 34.0658C26.6086 35.0704 18.5236 36.0643 18.5236 36.0643C18.5236 36.0643 22.8347 34.9682 25.7261 33.771C28.2745 32.7158 34.6919 30.2595 36.2314 29.6795C35.7142 29.2622 35.2113 28.8102 34.694 28.3929C33.3743 29.2264 29.023 31.8892 26.4306 32.5607C23.3422 33.3515 16.9516 34.7633 16.9516 34.7633C16.9516 34.7633 22.6963 32.0689 26.0372 30.5708C28.7757 29.3508 32.7115 28.1804 34.0466 27.7998C33.5293 27.3825 33.0611 26.9449 32.5785 26.5419C31.6414 26.8438 27.1378 28.3067 24.4093 28.7188C21.3318 29.1894 14.8378 29.3809 14.8378 29.3809C14.8378 29.3809 20.4433 27.8062 24.1089 27.0922C27.1948 26.5034 30.8985 26.0893 32.0004 25.9775C31.2837 25.3558 30.6506 24.7281 30.0378 24.1493C29.1067 24.5349 26.4687 25.5123 23.616 25.8324C20.045 26.2202 15.7261 26.2575 15.7261 26.2575C15.7261 26.2575 19.8664 24.8877 23.1112 24.4053C25.4907 24.0515 28.2108 23.7577 29.48 23.634C28.9914 23.1474 28.5722 22.6895 28.1386 22.2662C27.112 22.4904 24.2339 23.1654 21.9346 23.2276C19.119 23.36 14.9783 23.0652 14.9783 23.0652C14.9783 23.0652 17.788 22.8491 20.6457 22.1251C22.9584 21.5407 26.3631 21.6523 27.6298 21.7306C27.1556 21.2093 26.6814 20.688 26.2765 20.1955C25.3826 20.3934 22.464 20.9704 21.1567 20.7941C19.5925 20.5519 14.7934 19.9843 14.7934 19.9843C14.7934 19.9843 18.9762 19.6876 21.0677 19.5392C22.5735 19.4324 24.7926 19.6617 25.9266 19.7663C25.5767 19.3371 25.2267 18.9079 24.9317 18.542C23.8071 18.8068 20.2742 19.4946 19.3792 19.205C18.2967 18.8782 13.7892 18.3908 13.7892 18.3908C13.7892 18.3908 17.3755 18.4559 19.7525 18.3041C21.4603 18.1998 23.5373 18.086 24.5759 18.0292C24.3155 17.6777 24.0898 17.3406 23.8641 17.0035C23.1746 17.002 20.5144 16.9552 19.2393 16.9952C17.7968 17.0471 14.6541 16.5974 14.6541 16.5974C14.6541 16.5974 16.9331 16.4862 18.5631 16.4715C19.8729 16.4458 22.588 16.5559 23.5835 16.603C23.4127 16.3293 23.2623 16.1045 23.1262 15.8451C22.5059 15.8723 19.8779 16.0419 18.6196 15.8453C17.1737 15.6115 14.2176 14.7114 14.2176 14.7114C14.2176 14.7114 16.7451 14.7844 18.8662 15.0543C20.5284 15.2559 22.205 15.4228 22.8658 15.4937C22.7153 15.2689 22.6342 15.0729 22.5184 14.8625C21.9961 14.8491 20.6948 14.7564 19.433 14.2742C17.8248 13.6484 15.6132 12.8132 15.6132 12.8132C15.6132 12.8132 17.5457 12.5584 19.5435 13.2238C20.9032 13.6655 21.9056 14.2838 22.3823 14.6031C22.0289 13.8883 21.8809 13.4616 21.7997 13.2656C21.5285 13.2344 20.5904 13.0487 19.5332 12.367C18.2967 11.5298 17.0424 10.4417 17.0424 10.4417C17.0424 10.4417 18.6606 10.2597 19.4036 11.0141C20.1609 11.7339 20.6232 12.0879 20.6232 12.0879C20.6232 12.0879 19.854 11.2008 19.4447 9.93499C18.9864 8.68953 19.3004 6.95208 19.3004 6.95208C19.3004 6.95208 20.8837 9.5975 21.0876 10.5752C21.2796 11.3855 21.5815 12.3226 21.7211 12.8676C21.6973 12.5329 21.6904 11.9617 21.741 11.2519C21.8599 10.0832 22.3683 8.9541 22.3683 8.9541C22.3683 8.9541 22.7573 10.1709 22.4998 11.2821C22.2423 12.3934 22.1587 12.3993 21.967 13.2537C22.2274 13.6052 22.7659 14.5591 23.246 15.164C23.1005 14.5353 22.9076 13.2374 23.0552 11.9994C23.2652 10.2189 23.7673 7.34148 23.7673 7.34148C23.7673 7.34148 24.1061 10.9328 23.7397 12.4049C23.4822 13.5162 23.3693 14.7685 23.3415 15.3254C23.5816 15.6279 23.8419 15.9793 24.1513 16.3105C24.0632 15.5432 23.9683 14.2047 24.0847 13.238C24.2838 11.7778 24.4308 11.7169 24.7245 9.93042C24.9835 8.12961 24.9153 5.74665 24.9153 5.74665C24.9153 5.74665 26.1235 8.3178 25.7883 9.51866C25.4531 10.7195 25.7356 12.0952 25.2628 13.7262C24.9563 14.8577 24.7309 16.1853 24.6314 16.9154C24.9061 17.2323 25.2011 17.5981 25.5307 17.9783C25.5981 17.0318 25.7126 15.0899 26.0731 13.5342C26.5653 11.4646 28.0828 7.01855 28.0828 7.01855C28.0828 7.01855 27.7053 11.6528 27.3448 13.2085C27.0502 14.5074 26.3149 17.6536 26.1148 18.6263C26.4994 19.0698 26.9533 19.5421 27.3581 20.0347C27.3241 18.8432 27.2728 16.2236 27.5031 14.4921C27.7958 12.2181 28.8367 7.45273 28.8367 7.45273C28.8367 7.45273 29.2882 12.6335 28.8198 15.0377C28.4484 16.9137 28.0324 19.5833 27.8873 20.6193C28.3614 21.1406 28.8703 21.6762 29.3791 22.2118C29.2614 21.0263 28.9048 17.184 29.0573 15.5421C29.2901 13.6086 30.4196 8.43344 30.4196 8.43344C30.4196 8.43344 30.7251 14.1627 30.4864 16.0125C30.2645 17.6257 29.9984 21.6971 29.9572 22.7762C30.4458 23.2628 30.9343 23.7494 31.4575 24.2504C31.5789 22.8798 31.8425 19.0103 31.6951 17.4065C31.4893 15.4537 31.9972 15.5017 32.1057 13.4762C32.2143 11.4506 32.064 8.38406 32.064 8.38406C32.064 8.38406 33.285 11.6101 33.1062 13.1194C32.9274 14.6286 33.7643 16.234 33.5746 18.0635C33.2744 20.9434 32.4807 23.7407 32.1049 24.8435C32.5934 25.3301 33.131 25.7965 33.6685 26.2628C33.6632 25.002 33.7204 20.3569 33.9567 18.709C34.2241 16.7899 35.6086 10.7054 35.6086 10.7054C35.6086 10.7054 35.3356 14.2056 35.336 15.8703C35.3363 17.535 36.2678 18.8141 35.7529 21.0367C35.3553 22.7801 34.5962 25.5916 34.2754 26.7578C34.5788 27.0054 34.8476 27.2385 35.151 27.4861C35.4544 27.7336 35.7578 27.9811 36.0612 28.2286C36.1083 27.2332 36.2312 25.173 36.6111 23.1786C37.1597 20.4829 38.28 19.4449 38.4688 17.1278C38.6922 14.8251 38.3568 11.5194 38.3568 11.5194C38.3568 11.5194 39.9015 15.042 39.3687 17.0135C38.8706 18.9995 38.0462 20.8908 38.0922 22.2496C38.1728 23.6228 38.3217 24.537 37.7618 25.8884C37.3741 26.8239 36.782 27.9589 36.4889 28.5682C37.22 29.1554 38.006 29.8059 38.8267 30.4707C38.7782 29.3139 38.6286 25.0702 38.9906 22.8249C39.3779 20.2246 41.6048 14.1644 41.6048 14.1644C41.6048 14.1644 40.907 18.7877 40.8306 21.0296C40.7542 23.2715 41.009 25.204 40.4441 26.9593C40.0312 28.2497 39.5153 29.9847 39.24 30.845C39.7572 31.2623 40.3091 31.694 40.861 32.1257C40.9275 30.6916 41.1158 26.7098 41.3081 24.6783C41.534 22.1736 42.8532 15.1689 42.8532 15.1689C42.8532 15.1689 42.4419 20.2763 42.6958 21.7213C42.9496 23.1662 43.2375 25.8026 42.7715 28.0049C42.4026 29.679 41.7778 31.7748 41.5228 32.6841C42.1643 33.1935 42.8058 33.7029 43.4819 34.2267C43.4335 33.0698 43.4327 29.7404 43.8809 27.2872C44.4405 24.2712 47.3704 17.6903 47.3704 17.6903C47.3704 17.6903 46.2084 20.9845 46.1988 23.457C46.2036 25.8949 46.1647 29.6139 45.473 31.479C45.0398 32.7205 44.4799 34.0718 44.213 34.8138C44.606 35.139 45.048 35.444 45.441 35.7692C45.5862 34.7332 45.9363 32.3206 46.5003 30.0777C47.2331 27.1335 49.9825 18.2449 49.9825 18.2449C49.9825 18.2449 49.4677 24.9739 49.1269 27.7559C48.8208 30.5521 48.2406 31.8544 46.1865 36.3217C46.6691 36.7247 47.2007 37.1074 47.6833 37.5103C47.6215 36.8757 47.7488 35.5887 48.7419 32.996C50.5703 28.1916 53.9358 23.0091 53.9358 23.0091C53.9358 23.0091 52.5896 26.5518 52.1405 28.5174C51.7572 30.2261 49.1011 36.6362 48.4693 38.1608C48.897 38.5004 49.3246 38.84 49.732 39.1306C49.693 38.3431 49.7619 36.7071 50.658 34.6425C51.968 31.775 56.9311 29.2033 56.9311 29.2033C56.9311 29.2033 52.6872 32.1948 52.1223 33.9501C51.5573 35.7053 52.1177 36.0187 51.5661 37.2517C51.1869 38.0689 50.6176 39.051 50.2695 39.597C50.7665 39.9653 50.9457 40.1207 51.408 40.4747C51.5244 39.508 52.4839 37.3884 53.8517 36.047C55.5794 34.327 57.2406 34.041 57.2406 34.041C57.2406 34.041 55.9565 35.3765 55.0856 37.0861C54.393 38.4637 52.602 40.2387 51.9252 40.892C55.2164 43.4331 57.5828 45.2663 57.5828 45.2663L55.9681 45.734C55.9681 45.734 53.8704 44.1339 50.4491 41.4171C50.1941 42.3264 49.3851 44.6707 48.1653 46.4388C46.5915 48.6692 42.896 51.8067 42.896 51.8067C42.896 51.8067 45.5015 48.9483 46.347 47.5935C47.1461 46.0571 47.3021 44.7008 48.2135 43.0891Z"
                        fill="#157E77"
                    />
                    <path
                        d="M52.8328 85.0991C52.7726 84.2787 52.8124 83.5682 52.8373 83.173C52.492 83.138 52.1218 83.1081 51.7266 83.0832C51.5417 83.9788 50.9272 86.8858 50.2771 88.0567C49.4971 89.4878 46.8568 93.8413 46.8568 93.8413C46.8568 93.8413 47.6663 90.6091 48.2562 88.8778C48.726 87.4568 50.4061 84.1543 50.9811 82.9984C50.5858 82.9735 50.1606 82.9286 49.7353 82.8837C49.3354 84.0045 48.1956 87.0167 47.4155 88.3177C46.4353 89.919 44.1196 92.126 44.1196 92.126C44.1196 92.126 46.3252 89.6289 46.6149 88.2179C46.8997 86.7819 46.9744 85.7263 47.7896 84.4703C48.2846 83.6946 48.6947 83.1442 48.9198 82.8389C48.3894 82.789 47.8591 82.7392 47.3037 82.6943C47.1239 83.6149 46.5944 86.2967 45.9443 87.4676C45.1643 88.8987 42.8492 93.3171 42.8492 93.3171C42.8492 93.3171 43.7389 90.7453 44.0536 88.809C44.3232 87.1679 46.0733 83.6953 46.5883 82.6295C46.3231 82.6045 46.0579 82.5796 45.7677 82.5597C45.5229 83.4153 44.6532 86.2173 43.9081 87.4332C43.0029 88.8894 39.6023 93.6033 39.6023 93.6033C39.6023 93.6033 40.8122 90.9413 41.377 88.9549C41.8467 87.2737 44.3021 83.5557 45.0273 82.4999C44.577 82.46 44.1267 82.4201 43.6764 82.3802C43.4514 82.9456 42.6665 84.7419 42.0614 85.7477C41.3413 86.9587 40.3412 88.59 39.8313 89.941C39.3264 91.317 38.6217 93.6436 38.6217 93.6436C38.6217 93.6436 39.5605 87.8097 40.5706 85.9683C41.3706 84.5072 42.721 82.9358 43.2461 82.3103C42.6607 82.2454 42.0754 82.1805 41.465 82.1207C41.185 82.9313 40.2602 85.4581 39.0499 86.9494C37.5896 88.7509 33.3981 92.3744 33.3981 92.3744C33.3981 92.3744 35.4187 90.1224 36.5988 88.351C37.639 86.7897 40.3345 82.9716 40.9847 82.0608C40.5344 82.0209 40.0791 81.956 39.6288 81.9161C39.1988 82.8868 37.7489 86.0392 36.5385 87.4004C35.0931 89.0168 32.0172 92.2347 32.0172 92.2347C32.0172 92.2347 34.2425 88.5368 35.5626 86.4251C36.6478 84.6987 38.4282 82.5469 39.0384 81.8262C38.5881 81.7863 38.1578 81.7164 37.7326 81.6715C37.3175 82.197 35.327 84.7291 33.9415 85.9953C32.381 87.4266 28.7845 89.9943 28.7845 89.9943C28.7845 89.9943 31.3552 86.9817 33.1558 85.19C34.6763 83.6887 36.612 82.0521 37.1922 81.5716C36.5518 81.4918 35.9564 81.3769 35.391 81.282C35.0109 81.8524 33.8907 83.4037 32.4002 84.6649C30.5295 86.2365 28.1035 87.8932 28.1035 87.8932C28.1035 87.8932 29.9239 85.5512 31.5745 84.0498C32.7849 82.9488 34.2104 81.7526 34.8807 81.2021C34.4204 81.1122 34.0101 81.0122 33.6048 80.9373C33.1097 81.4528 31.7393 82.9241 30.4637 83.83C28.9231 84.9712 26.4721 86.3728 26.4721 86.3728C26.4721 86.3728 27.9776 85.1866 29.318 83.6953C30.4033 82.4892 32.3691 81.2629 33.1145 80.8274C32.6492 80.7124 32.1838 80.5975 31.7685 80.4726C31.3384 80.923 29.908 82.3543 29.1026 82.7498C28.1271 83.2053 25.2008 84.7021 25.2008 84.7021C25.2008 84.7021 27.4516 82.9504 28.5771 82.0745C29.3874 81.4439 30.728 80.733 31.4083 80.3626C31.048 80.2526 30.6878 80.1427 30.3826 80.0477C29.8474 80.6232 28.1119 82.3498 27.4965 82.5251C26.7612 82.7504 24.0299 84.1821 24.0299 84.1821C24.0299 84.1821 26.0808 82.8607 27.3663 81.8747C28.2916 81.169 29.4221 80.3182 29.9873 79.8927C29.7071 79.7928 29.4519 79.6878 29.1967 79.5828C28.8065 79.8431 27.2859 80.8241 26.5806 81.3296C25.7853 81.9052 23.8394 82.8414 23.8394 82.8414C23.8394 82.8414 25.0849 81.9154 26.0002 81.2898C26.7305 80.7792 28.3062 79.8132 28.8865 79.4628C28.6863 79.3728 28.5162 79.3028 28.3411 79.2078C28.0009 79.4581 26.5804 80.5492 25.795 80.9146C24.8896 81.3301 22.8785 81.9411 22.8785 81.9411C22.8785 81.9411 24.3341 81.0251 25.6348 80.3743C26.6502 79.8587 27.6607 79.3181 28.0609 79.1078C27.8907 79.0378 27.7706 78.9578 27.6255 78.8828C27.3254 79.073 26.5551 79.5135 25.6596 79.7189C24.5139 79.9744 22.9481 80.3401 22.9481 80.3401C22.9481 80.3401 23.9434 79.4643 25.3242 79.0836C26.2597 78.8182 27.0602 78.7879 27.4504 78.7878C26.98 78.5178 26.7348 78.3327 26.6147 78.2527C26.4496 78.3378 25.8494 78.5882 24.9938 78.6034C23.9782 78.5987 22.8575 78.459 22.8575 78.459C22.8575 78.459 23.7028 77.7433 24.4083 77.8882C25.1087 78.008 25.504 78.0329 25.504 78.0329C25.504 78.0329 24.7334 77.823 24.0228 77.2629C23.2922 76.7328 22.8116 75.6323 22.8116 75.6323C22.8116 75.6323 24.708 76.5272 25.1935 77.0024C25.6088 77.3875 26.1343 77.8026 26.4195 78.0577C26.2794 77.8776 26.0592 77.5575 25.8189 77.1373C25.4435 76.432 25.3031 75.6015 25.3031 75.6015C25.3031 75.6015 25.9837 76.1416 26.2591 76.867C26.5345 77.5924 26.4895 77.6274 26.7048 78.1827C26.985 78.2826 27.6505 78.6177 28.1508 78.7776C27.8305 78.4775 27.23 77.8173 26.8445 77.0619C26.2888 75.9764 25.4828 74.1606 25.4828 74.1606C25.4828 74.1606 27.0343 76.0613 27.3848 77.0318C27.6602 77.7571 28.0707 78.5075 28.2659 78.8326C28.5161 78.9126 28.7963 79.0126 29.0965 79.0825C28.7562 78.6824 28.1956 77.9621 27.8952 77.3718C27.4547 76.4714 27.5147 76.3813 27.0041 75.2608C26.4684 74.1453 25.5274 72.8247 25.5274 72.8247C25.5274 72.8247 27.1838 73.8198 27.4492 74.6253C27.7146 75.4307 28.3952 76.1009 28.7457 77.2015C29.0011 77.9568 29.3766 78.7922 29.5968 79.2425C29.872 79.3174 30.1773 79.4124 30.5075 79.5023C30.1871 78.9421 29.5164 77.8016 29.1308 76.7861C28.6251 75.4304 27.7987 72.3438 27.7987 72.3438C27.7987 72.3438 29.3405 75.105 29.726 76.1205C30.0514 76.9659 30.8275 79.022 31.0829 79.6473C31.4681 79.7522 31.9034 79.8471 32.3187 79.9721C31.8482 79.3118 30.8272 77.8512 30.3015 76.7857C29.6057 75.3901 28.389 72.3036 28.389 72.3036C28.389 72.3036 30.6062 75.0596 31.2521 76.5953C31.7527 77.7959 32.5287 79.4617 32.8391 80.102C33.3044 80.217 33.7947 80.3269 34.2851 80.4368C33.7696 79.8116 32.113 77.7758 31.5773 76.7904C30.9766 75.6098 29.6548 72.2582 29.6548 72.2582C29.6548 72.2582 31.9972 75.3794 32.5629 76.5149C33.0484 77.5104 34.44 79.9114 34.8254 80.5367C35.2857 80.6266 35.7461 80.7165 36.2314 80.8014C35.7809 79.9811 34.4644 77.6951 33.7737 76.8447C32.9179 75.8194 33.223 75.6542 32.5172 74.4687C31.8114 73.2831 30.5652 71.6075 30.5652 71.6075C30.5652 71.6075 32.4767 72.9677 32.9473 73.8882C33.4179 74.8086 34.4987 75.3986 35.0844 76.5041C36.0055 78.2449 36.6164 80.1259 36.8218 80.8913C37.2821 80.9812 37.7624 81.0411 38.2427 81.101C37.7622 80.3907 36.0353 77.7446 35.5447 76.7241C34.969 75.5386 33.4469 71.5766 33.4469 71.5766C33.4469 71.5766 34.6183 73.6575 35.2489 74.5979C35.8796 75.5383 36.8903 75.9082 37.4411 77.359C37.8767 78.4945 38.5126 80.3705 38.773 81.1509C39.0382 81.1758 39.2784 81.2058 39.5435 81.2307C39.8087 81.2557 40.0739 81.2806 40.339 81.3055C39.9887 80.7253 39.2779 79.5147 38.7372 78.2441C38.0262 76.5133 38.2661 75.5026 37.4952 74.122C36.7493 72.7363 35.3079 70.9957 35.3079 70.9957C35.3079 70.9957 37.5147 72.4009 37.9603 73.7166C38.431 75.0272 38.6816 76.408 39.2221 77.1583C39.7877 77.9036 40.2181 78.3638 40.4135 79.3393C40.5488 80.0147 40.6441 80.8802 40.7093 81.3354C41.3447 81.3903 42.0351 81.4601 42.7506 81.5249C42.2851 80.8897 40.5934 78.5488 39.9476 77.1431C39.1816 75.5273 38.1447 71.26 38.1447 71.26C38.1447 71.26 39.5014 74.1364 40.3073 75.4319C41.1132 76.7275 41.989 77.7228 42.3346 78.9285C42.59 79.8139 42.9556 80.9896 43.1258 81.5799C43.5761 81.6198 44.0514 81.6546 44.5267 81.6895C44.0212 80.8542 42.6196 78.5331 41.9589 77.3126C41.1379 75.8119 39.2304 71.3548 39.2304 71.3548C39.2304 71.3548 40.9324 74.3961 41.623 75.1164C42.3136 75.8366 43.4748 77.2171 44.0455 78.6378C44.4711 79.7233 44.9118 81.1441 45.1121 81.7544C45.6675 81.7992 46.2228 81.8441 46.8032 81.884C46.3377 81.2487 45.0764 79.3679 44.4005 77.8122C43.5744 75.8962 42.7375 71.0685 42.7375 71.0685C42.7375 71.0685 43.3285 73.3698 44.2595 74.7704C45.1855 76.1459 46.572 78.2618 46.8875 79.5775C47.1129 80.443 47.3084 81.4185 47.4386 81.9388C47.7838 81.9737 48.149 81.9786 48.4943 82.0135C48.1839 81.3732 47.468 79.8775 46.9372 78.3968C46.2362 76.4558 44.4233 70.3926 44.4233 70.3926C44.4233 70.3926 46.6809 74.3894 47.5419 76.0902C48.428 77.786 48.5933 78.7415 49.1247 82.0434C49.5499 82.0883 49.9952 82.1031 50.4205 82.148C50.1452 81.8129 49.7297 81.0376 49.3089 79.1966C48.5224 75.7897 48.4611 71.5872 48.4611 71.5872C48.4611 71.5872 49.0422 74.0985 49.5329 75.3792C49.9635 76.4897 50.8905 81.1173 51.1109 82.2179C51.4812 82.2478 51.8514 82.2777 52.1916 82.2876C51.8713 81.8574 51.2906 80.907 51.015 79.4012C50.6692 77.285 52.4993 73.9524 52.4993 73.9524C52.4993 73.9524 51.2345 77.2498 51.5801 78.4554C51.9257 79.6611 52.3609 79.6259 52.5163 80.5314C52.6115 81.1368 52.6618 81.9072 52.6719 82.3475C53.0922 82.3674 53.2523 82.3874 53.6475 82.4122C53.3472 81.822 53.0866 80.2611 53.3513 78.9852C53.6761 77.3591 54.5063 76.5684 54.5063 76.5684C54.5063 76.5684 54.2866 77.8092 54.442 79.105C54.5724 80.1456 54.2327 81.8267 54.0978 82.4521C56.9196 82.6414 58.9509 82.7809 58.9509 82.7809L58.2157 83.6567C58.2157 83.6567 56.4246 83.5471 53.4627 83.3079C53.663 83.9182 54.0937 85.549 54.0742 87.0099C54.0297 88.8661 53.1301 92.0383 53.1301 92.0383C53.1301 92.0383 53.5195 89.4366 53.4842 88.3509C53.3538 87.1803 52.9283 86.3549 52.8328 85.0991Z"
                        fill="#9CCFCA"
                    />
                    <path
                        d="M47.6446 47.7683C47.7946 48.9685 48.0572 49.9812 48.2072 50.5438C47.7196 50.6938 47.1945 50.8438 46.6319 50.9938C46.1069 49.7561 44.3816 45.743 43.1064 44.2427C41.5686 42.4049 36.5053 36.8915 36.5053 36.8915C36.5053 36.8915 38.6056 41.3172 39.9558 43.6426C41.0435 45.5554 44.4191 49.8311 45.5818 51.3314C45.0192 51.4814 44.4191 51.6689 43.819 51.8565C42.9188 50.3562 40.4059 46.3431 38.9057 44.6928C37.0303 42.6674 33.0547 40.1545 33.0547 40.1545C33.0547 40.1545 36.9553 43.1175 37.7805 45.0678C38.6056 47.0557 39.0182 48.5559 40.5559 50.1312C41.4936 51.1064 42.2437 51.7815 42.6563 52.1565C41.9062 52.3816 41.156 52.6066 40.3684 52.8316C39.8433 51.5564 38.3056 47.8433 37.0303 46.3431C35.4926 44.5053 30.8793 38.8043 30.8793 38.8043C30.8793 38.8043 32.9047 42.2549 33.9173 44.9553C34.78 47.2432 38.3056 51.744 39.3557 53.1317C38.9807 53.2442 38.6056 53.3567 38.193 53.4693C37.5929 52.3066 35.5301 48.5184 34.1049 46.9807C32.3796 45.1429 26.116 39.3294 26.116 39.3294C26.116 39.3294 28.6289 42.8175 30.0167 45.5179C31.1794 47.8058 35.7926 52.4566 37.1429 53.7693C36.5053 53.9568 35.8677 54.1444 35.23 54.3319C34.7425 53.5818 33.0922 51.2189 31.9295 49.9437C30.5418 48.4059 28.6289 46.3431 27.5038 44.5428C26.3786 42.705 24.6908 39.5544 24.6908 39.5544C24.6908 39.5544 27.7288 47.6933 29.7166 50.0562C31.2919 51.9315 33.6923 53.8068 34.6299 54.5569C33.8048 54.8195 32.9797 55.082 32.117 55.3446C31.4794 54.2569 29.4166 50.8813 27.2412 49.081C24.6158 46.9057 17.5271 42.8925 17.5271 42.8925C17.5271 42.8925 21.0902 45.5554 23.3031 47.7683C25.2534 49.7186 30.2417 54.4444 31.4419 55.5696C30.8043 55.7571 30.1667 55.9822 29.5291 56.1697C28.6289 54.8945 25.6284 50.7688 23.4906 49.156C20.9402 47.2432 15.5768 43.4926 15.5768 43.4926C15.5768 43.4926 19.8525 48.1809 22.3654 50.8438C24.4282 53.0192 27.6163 55.6071 28.704 56.4698C28.0664 56.6573 27.4662 56.8823 26.8661 57.0698C26.116 56.4322 22.5154 53.3567 20.1525 51.9315C17.4896 50.3187 11.5636 47.6558 11.5636 47.6558C11.5636 47.6558 16.1394 51.2564 19.2524 53.3192C21.8778 55.0445 25.1409 56.8448 26.116 57.3699C25.2159 57.67 24.3907 58.0075 23.6031 58.3076C22.8905 57.5949 20.8276 55.6821 18.3147 54.2944C15.1642 52.5691 11.1885 50.8813 11.1885 50.8813C11.1885 50.8813 14.4891 53.7318 17.3021 55.4196C19.3649 56.6573 21.7653 57.97 22.8905 58.5701C22.2529 58.8326 21.6903 59.0952 21.1277 59.3202C20.265 58.7201 17.8646 56.9948 15.7643 56.0572C13.2139 54.857 9.27571 53.5443 9.27571 53.5443C9.27571 53.5443 11.7886 54.8195 14.1515 56.5823C16.0643 58.0075 19.2524 59.2077 20.4526 59.6203C19.815 59.9203 19.1774 60.2204 18.6148 60.5204C17.8646 59.9953 15.3892 58.3451 14.114 58.0075C12.5763 57.6324 7.92549 56.3197 7.92549 56.3197C7.92549 56.3197 11.6761 58.195 13.5514 59.1327C14.9017 59.8078 17.0395 60.4454 18.1272 60.783C17.6396 61.0455 17.152 61.3081 16.7395 61.5331C15.8018 60.858 12.8013 58.8702 11.8636 58.7951C10.7385 58.6826 6.38773 57.4074 6.38773 57.4074C6.38773 57.4074 9.72579 58.7201 11.8636 59.7703C13.4014 60.5204 15.2767 61.4206 16.2144 61.8707C15.8393 62.0957 15.5018 62.3207 15.1642 62.5458C14.5266 62.2832 12.0512 61.3081 10.8885 60.783C9.57576 60.1829 6.50025 59.3952 6.50025 59.3952C6.50025 59.3952 8.56309 60.3704 10.0633 61.008C11.2635 61.5331 13.814 62.4708 14.7516 62.8083C14.4891 62.9958 14.264 63.1459 14.039 63.3334C13.4764 63.0709 11.1135 61.9082 9.87581 61.6081C8.45058 61.2706 5.37506 60.9705 5.37506 60.9705C5.37506 60.9705 7.73796 61.8707 9.8008 62.4332C11.4136 62.8833 13.0263 63.3709 13.6639 63.5584C13.4389 63.7085 13.2889 63.8585 13.1014 64.0085C12.6138 63.821 11.3761 63.4084 10.0258 63.3709C8.30055 63.3334 5.93766 63.2584 5.93766 63.2584C5.93766 63.2584 7.62544 64.2335 9.72579 64.3836C11.151 64.4961 12.3137 64.3086 12.8763 64.196C12.2762 64.7211 11.9762 65.0587 11.8261 65.2087C11.5636 65.1337 10.6259 64.9462 9.38823 65.1712C7.92549 65.4713 6.35023 65.9963 6.35023 65.9963C6.35023 65.9963 7.77546 66.784 8.75063 66.3714C9.72579 65.9963 10.2884 65.8463 10.2884 65.8463C10.2884 65.8463 9.23821 66.3714 8.37556 67.3841C7.47541 68.3592 7.10035 70.0845 7.10035 70.0845C7.10035 70.0845 9.57576 68.2467 10.1384 67.4216C10.6259 66.7465 11.2635 65.9963 11.6011 65.5463C11.4511 65.8463 11.226 66.3714 11.001 67.0465C10.6634 68.1717 10.701 69.4094 10.701 69.4094C10.701 69.4094 11.5261 68.4342 11.7136 67.3091C11.9012 66.1839 11.8261 66.1464 11.9762 65.2837C12.3512 65.0587 13.2139 64.3836 13.889 64.0085C13.5139 64.5336 12.8388 65.6588 12.5013 66.859C12.0137 68.5843 11.3761 71.4348 11.3761 71.4348C11.3761 71.4348 13.0638 68.2467 13.2889 66.7465C13.4764 65.6213 13.8515 64.4211 14.039 63.896C14.3766 63.7085 14.7516 63.4834 15.1642 63.2959C14.7891 63.971 14.189 65.1712 13.9265 66.1089C13.5514 67.5341 13.6639 67.6466 13.2514 69.4094C12.8013 71.1722 11.8261 73.3476 11.8261 73.3476C11.8261 73.3476 13.9265 71.4347 14.0765 70.197C14.2265 68.9593 15.0142 67.7966 15.2017 66.1089C15.3517 64.9462 15.6518 63.6334 15.8393 62.9208C16.2144 62.7333 16.6269 62.5083 17.077 62.2832C16.777 63.1834 16.1394 65.0212 15.8768 66.5964C15.5393 68.6968 15.2392 73.3851 15.2392 73.3851C15.2392 73.3851 16.6644 68.9593 16.927 67.3841C17.152 66.0714 17.6771 62.8833 17.8646 61.9082C18.3897 61.6456 18.9898 61.3831 19.5524 61.083C19.0648 62.1707 18.0147 64.5711 17.5646 66.2589C16.9645 68.4718 16.1019 73.2726 16.1019 73.2726C16.1019 73.2726 18.5023 68.6593 18.9898 66.2589C19.3649 64.3836 20.0025 61.7581 20.265 60.7455C20.9027 60.4454 21.5778 60.1454 22.2529 59.8453C21.6903 60.8955 19.89 64.3086 19.4024 65.8838C18.8773 67.7591 17.9397 72.9725 17.9397 72.9725C17.9397 72.9725 20.4151 67.7966 20.9027 65.9963C21.3152 64.4211 22.6279 60.5579 23.003 59.5453C23.6406 59.2827 24.2782 59.0202 24.9533 58.7576C24.5408 60.0704 23.3031 63.746 22.5529 65.1712C21.6153 66.8965 22.1029 67.0465 21.4277 68.9593C20.7526 70.8722 19.4399 73.6476 19.4399 73.6476C19.4399 73.6476 21.8028 71.1347 22.2154 69.672C22.6279 68.2092 24.0157 67.0465 24.5408 65.2837C25.3659 62.5083 25.7035 59.6203 25.7785 58.4576C26.4161 58.195 27.0912 57.97 27.7663 57.745C27.2787 58.9077 25.5534 63.2209 25.1409 64.8336C24.6533 66.709 23.6031 72.86 23.6031 72.86C23.6031 72.86 24.6908 69.5219 25.3284 67.9842C25.966 66.4464 27.3162 65.6213 27.6913 63.3709C27.9913 61.6081 28.3664 58.7201 28.5164 57.5199C28.8915 57.4074 29.229 57.2949 29.6041 57.1824C29.9792 57.0699 30.3542 56.9573 30.7293 56.8448C30.3917 57.7825 29.7166 59.7328 29.3041 61.7206C28.779 64.4211 29.4166 65.8088 28.704 68.0217C28.0288 70.2345 26.4536 73.16 26.4536 73.16C26.4536 73.16 29.229 70.4971 29.4916 68.4718C29.7916 66.4464 29.7541 64.3836 30.3167 63.1459C30.9168 61.9082 31.4044 61.1205 31.4044 59.6578C31.4044 58.6451 31.2919 57.3699 31.2544 56.6948C32.1545 56.4322 33.1297 56.1322 34.1424 55.8321C33.6548 56.8823 31.892 60.7455 31.3669 62.9583C30.7293 65.5088 30.4668 71.9598 30.4668 71.9598C30.4668 71.9598 31.5919 67.4216 32.3796 65.3212C33.1672 63.2209 34.1424 61.5331 34.2924 59.6953C34.4049 58.3451 34.5924 56.5448 34.6675 55.6446C35.3051 55.4571 35.9802 55.2695 36.6553 55.082C36.1677 56.4322 34.8175 60.1829 34.2174 62.1332C33.4673 64.5336 32.0045 71.5098 32.0045 71.5098C32.0045 71.5098 33.5798 66.6339 34.3674 65.3962C35.155 64.1585 36.4302 61.8331 36.8428 59.6203C37.1429 57.9325 37.3679 55.7571 37.4804 54.8195C38.2681 54.5944 39.0557 54.3694 39.8808 54.1444C39.3932 55.1945 38.118 58.27 37.5929 60.708C36.9553 63.7085 37.1429 70.9097 37.1429 70.9097C37.1429 70.9097 37.3304 67.4216 38.2681 65.1337C39.2057 62.8833 40.5934 59.4327 40.6685 57.4449C40.7435 56.1322 40.7435 54.6694 40.781 53.8818C41.2686 53.7318 41.7936 53.6193 42.2812 53.4693C42.0187 54.4819 41.4186 56.8448 41.081 59.1327C40.6309 62.1332 39.7683 71.3972 39.7683 71.3972C39.7683 71.3972 41.8687 64.9837 42.6188 62.2832C43.4064 59.5828 43.3689 58.1575 43.1814 53.2442C43.7815 53.0567 44.4191 52.9067 45.0192 52.7191C44.7191 53.2817 44.3441 54.5194 44.2691 57.2949C44.119 62.4332 45.2442 68.5093 45.2442 68.5093C45.2442 68.5093 45.3567 64.7211 45.6943 62.7333C45.9943 61.008 45.9943 54.0694 45.9943 52.4191C46.5194 52.269 47.0445 52.119 47.5321 52.0065C47.1945 52.7191 46.632 54.2569 46.6695 56.5073C46.782 59.6578 50.3826 63.9335 50.3826 63.9335C50.3826 63.9335 47.6071 59.5453 47.7571 57.7075C47.9072 55.8696 48.5448 55.7946 48.5073 54.4444C48.4698 53.5443 48.3197 52.4191 48.2072 51.7815C48.8073 51.6314 49.0324 51.5564 49.5949 51.4064C49.3324 52.3441 49.4074 54.6694 50.1575 56.4322C51.0952 58.6826 52.5204 59.5828 52.5204 59.5828C52.5204 59.5828 51.8453 57.8575 51.6953 55.9447C51.5828 54.4069 50.6076 52.0815 50.2326 51.2189C54.2457 50.1312 57.1337 49.3436 57.1337 49.3436L55.821 48.2934C55.821 48.2934 53.2706 48.9685 49.0699 50.1687C49.1824 49.231 49.3324 46.7556 48.8823 44.6553C48.2822 41.9923 46.0694 37.6791 46.0694 37.6791C46.0694 37.6791 47.3821 41.3172 47.6446 42.8925C47.7946 44.6178 47.4196 45.9305 47.6446 47.7683Z"
                        fill="#9CCFCA"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_152_35">
                        <rect width="50" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="details">
                <h1 className={style.title}>
                    <StarIcon />
                    {title}
                </h1>
                <p>{description}</p>
            </div>

            <div className={style.container}>
                {sponsors.map((sponsor, index) => (
                    <SingleSponsor key={index} {...sponsor} />
                ))}
            </div>

            <svg
                className={style['leaves-bottom']}
                width="50"
                height="100"
                viewBox="0 0 50 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g cliPath="url(#clip0_152_40)">
                    <path
                        d="M-10.7491 36.8608C-13.3575 37.7534 -16.6593 26.42 -16.6593 26.42C-16.6593 26.42 -20.0174 27.3513 -23.9762 33.5071C-29.0839 41.4566 -27.7594 54.8509 -18.6004 56.6209C-17.1959 56.8791 -14.1078 57.0004 -12.04 55.0627C-12.8343 54.9633 -13.9938 54.6769 -15.532 54.0046C-18.5163 52.6302 -20.4659 50.2104 -20.4659 50.2104C-20.4659 50.2104 -18.0829 52.0838 -15.4786 53.2251C-13.8187 53.9598 -12.1529 54.0829 -11.1745 54.1228C-10.8955 53.7279 -10.6164 53.3329 -10.3373 52.938C-11.8592 52.1587 -15.4805 50.2276 -17.831 48.1405C-20.8793 45.4656 -21.2773 43.9171 -21.2773 43.9171C-21.2773 43.9171 -20.3908 45.562 -17.399 47.747C-15.0144 49.4674 -10.8691 50.9753 -9.26857 51.5259C-8.53974 50.4777 -7.77974 49.3686 -6.98857 48.1986C-7.56468 47.6731 -9.11477 46.6489 -10.564 44.6774C-12.7379 41.7203 -13.3707 39.1296 -13.3707 39.1296C-13.3707 39.1296 -11.8353 41.683 -9.84106 44.2408C-8.40519 46.0133 -6.76011 46.702 -6.19739 47.0286C-4.75458 44.886 -3.26428 42.5757 -1.82 40.2803C-2.32038 39.832 -3.5023 38.689 -4.34429 37.1821C-5.50256 35.1676 -5.34984 33.5939 -5.34984 33.5939C-5.34984 33.5939 -4.76767 35.0829 -3.56045 36.7767C-2.73039 37.9317 -1.60494 38.5848 -0.935323 38.9277C1.02106 35.8572 9.84698 21.3214 9.84698 21.3214C9.84698 21.3214 6.60969 27.1936 2.48625 34.5713C3.37259 34.641 6.70418 34.887 8.87914 34.5408C11.3911 34.1367 13.2067 32.9918 13.2067 32.9918C13.2067 32.9918 11.685 33.7877 9.41362 34.6224C7.46437 35.3531 3.10252 35.6936 1.86432 35.6359C0.417107 38.2371 -1.12361 41.021 -2.63316 43.7441C-1.58051 44.0141 0.86033 44.6493 3.59509 44.9355C7.27706 45.3225 13.1235 44.8586 13.1235 44.8586C13.1235 44.8586 8.70834 45.9785 4.41176 45.8915C1.23163 45.7998 -1.92924 45.2954 -3.33375 45.0373C-4.39207 46.9541 -5.46524 48.8249 -6.44636 50.666C-4.68101 51.5699 -0.433184 53.5529 1.55036 54.0307C4.31189 54.7148 10.8845 55.0836 10.8845 55.0836C10.8845 55.0836 6.10403 56.0166 1.35895 54.8547C-2.33348 53.9629 -5.80772 52.6449 -7.28649 52.1567C-7.64421 52.7803 -7.95591 53.389 -8.31363 54.0126C-8.37597 54.1343 -5.28897 57.559 -2.67283 59.0523C0.961848 61.1823 6.38993 62.886 6.38993 62.886C6.38993 62.886 0.0993469 61.8164 -3.32301 59.8719C-5.74167 58.5182 -8.01639 56.5082 -9.12259 55.4424C-9.26359 55.7928 -9.41944 56.0972 -9.51442 56.4327C-9.23662 57.7659 -8.92912 59.1911 -7.96246 60.4544C-6.72406 62.0874 -4.59345 63.1783 -4.59345 63.1783C-4.59345 63.1783 -6.83682 62.6828 -8.59192 60.7084C-9.31801 59.8756 -9.78429 59.0606 -10.0991 58.4C-12.2164 68.6873 1.35817 72.4878 10.4836 66.5956C17.7622 61.9092 22.2415 50.9103 22.2415 50.9103C22.2415 50.9103 18.156 52.737 14.2855 52.8681C10.4151 52.9992 3.15656 52.3944 2.638 49.0555C2.07342 45.7314 15.6126 51.6268 21.6845 48.3969C26.8492 45.663 24.1145 34.1974 24.1145 34.1974C24.1145 34.1974 24.152 36.6753 21.1473 39.017C18.4663 41.1018 7.46222 41.9598 6.26085 39.6543C4.72981 36.6421 18.481 39.5726 21.2712 32.4726C22.9009 28.3897 18.2372 25.1181 15.9876 22.0837C13.784 19.0345 13.4376 15.2844 13.4376 15.2844C13.4376 15.2844 11.5833 15.6795 7.50512 16.7415C3.42692 17.8036 -0.243325 16.1932 -2.1359 18.989C-4.02848 21.7848 -0.272934 28.8557 -2.67361 28.8174C-5.07429 28.7791 -4.4801 19.4406 -4.4801 19.4406C-4.4801 19.4406 -6.38334 20.1565 -10.9098 21.7189C-15.3131 23.1907 -8.14068 35.9682 -10.7491 36.8608Z"
                        fill="#145B61"
                    />
                    <path
                        d="M-1.43705 73.6408C-1.80667 73.4235 -2.24796 73.1138 -2.70829 72.6447C-3.77228 71.522 -3.39137 71.4953 -2.5073 72.2964C-1.98959 72.7381 -0.988982 73.1608 -0.233702 73.3913C-0.0392409 73.3268 0.15522 73.2624 0.349681 73.198C-0.196595 72.517 -1.23652 71.0879 -1.90031 69.5922C-2.81718 67.5008 -2.38665 67.0432 -1.37105 69.2843C-0.630836 70.9121 0.444175 72.2964 1.00799 72.955C1.10522 72.9227 1.18015 72.8731 1.27738 72.8408C1.644 72.6945 2.02816 72.5258 2.41233 72.357C2.20561 71.4724 1.71274 69.2073 1.36647 66.9848C0.948796 64.1644 1.58402 65.4209 1.78396 67.0951C1.93629 68.3707 2.88322 70.8832 3.29542 71.965C4.40806 71.4637 5.56055 70.9575 6.75288 70.4464C6.69275 69.6044 6.54871 67.721 6.67079 65.8655C6.83623 63.3574 7.16248 64.2273 7.18048 66.4093C7.18921 68.006 7.40519 69.4761 7.5212 70.109C9.21247 69.3745 10.9213 68.6177 12.5153 67.9155C12.5492 67.1832 12.6938 64.8395 13.2762 63.453C13.806 62.1337 13.9461 62.4603 13.5724 63.9019C13.2371 65.1568 13.209 67.1221 13.2087 67.6277C17.7342 65.5729 18.1502 65.5014 18.1502 65.5014C18.1502 65.5014 12.1612 68.5052 10.2371 69.4908C10.3867 69.8971 10.7418 70.5005 11.3535 71.0521C12.2997 71.8657 12.3824 72.2196 11.2768 71.4256C10.4388 70.8413 9.84319 70.0855 9.58358 69.7737C8.17599 70.5136 6.74609 71.236 5.41819 71.9661C5.58057 72.3101 5.97222 73.0506 6.93272 73.9838C8.28188 75.2939 8.22424 75.8268 6.61697 74.3868C5.53218 73.4285 4.92375 72.735 4.63708 72.3658C3.91813 72.7781 3.23425 73.1456 2.57268 73.5305C2.78892 74.4949 3.45218 77.0019 4.31519 78.473C5.42502 80.3182 5.45834 80.5972 4.07762 78.6843C3.01063 77.1979 2.05718 74.9694 1.70386 74.0422C1.43924 74.1962 1.21445 74.3453 0.967363 74.4769C0.914475 75.0497 0.931494 76.0386 1.25449 77.0505C1.76365 78.6057 1.42886 78.8492 0.784375 77.0073C0.470905 76.0752 0.367675 75.38 0.372698 74.9142C-0.87252 75.9982 -0.999359 77.8138 -0.899391 78.651C-0.344451 84.1444 7.39205 85.6173 12.3258 83.0874C16.1341 81.1211 9.40176 76.2075 11.3544 75.461C13.3469 74.7096 15.2356 83.4162 19.3909 76.2294C21.2874 72.982 16.0764 72.5123 16.5107 70.9014C17.1638 68.4141 20.2349 74.3253 22.0869 71.0429C22.9339 69.5025 23.4684 68.2231 24.3047 65.9154C25.141 63.6077 25.4495 61.7899 25.4495 61.7899C25.4495 61.7899 22.9012 61.7806 21.2717 60.3231C19.6198 58.8481 17.9607 55.9583 15.4806 56.6889C11.1658 57.9694 12.014 63.548 10.3523 62.499C9.04273 61.6897 10.3053 57.8733 11.6671 56.4109C13.1914 54.7869 8.29666 52.903 6.21393 55.607C3.34983 59.2165 5.80778 64.3943 4.69963 65.4411C3.24391 66.7937 2.84483 61.9283 3.14083 59.667C3.43683 57.4057 -1.94965 57.1599 -5.07212 61.1451C-9.01906 66.1825 -7.54275 74.3129 -1.43705 73.6408Z"
                        fill="#9CCFCA"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_152_40">
                        <rect width="50" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Sponsors;
