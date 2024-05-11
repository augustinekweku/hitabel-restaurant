import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        type="text/javascript"
      ></Script>
      <Script src="/assets/lib/wow/wow.min.js" type="text/javascript"></Script>
      <Script
        src="/assets/lib/easing/easing.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/waypoints/waypoints.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/counterup/counterup.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/owlcarousel/owl.carousel.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/tempusdominus/js/moment.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/tempusdominus/js/moment-timezone.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
        type="text/javascript"
      ></Script>
    </>
  );
};

export default CustomScript;
