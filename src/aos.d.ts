declare module 'aos' {
  const AOS: {
    init: (config?: {
      // Add any specific AOS configuration options you need
      offset?: number;
      duration?: number;
      easing?: string;
      delay?: number;
      once?: boolean;
      // Add other AOS options as needed
    }) => void;
    refresh: () => void;
    // Add other AOS methods you plan to use
  };
  
  export default AOS;
}
