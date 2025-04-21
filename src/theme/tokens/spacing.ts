const sp = {
  "sp-none": '0rem',
  "sp-2": '0.125rem',    // 2px
  "sp-4": '0.25rem',     // 4px
  "sp-6": '0.375rem',    // 6px
  "sp-8": '0.5rem',      // 8px
  "sp-10": '0.625rem',   // 10px
  "sp-12": '0.75rem',    // 12px
  "sp-14": '0.875rem',   // 14px
  "sp-16": '1rem',       // 16px
  "sp-18": '1.125rem',   // 18px
  "sp-20": '1.25rem',    // 20px
  "sp-22": '1.375rem',   // 22px
  "sp-24": '1.5rem',     // 24px
  "sp-32": '2rem',       // 32px
  "sp-40": '2.5rem',     // 40px
  "sp-48": '3rem',       // 48px
  "sp-56": '3.5rem',     // 56px
  "sp-64": '4rem',       // 64px
  "sp-72": '4.5rem',     // 72px
  "sp-80": '5rem',       // 80px
  "sp-96": '6rem',       // 96px
};

const spacing = {
  "none": sp["sp-none"],
  "3xs": sp["sp-2"],      // 2px
  "2xs": sp["sp-4"],      // 4px
  "xs": sp["sp-8"],       // 8px
  "sm": sp["sp-12"],      // 12px
  "md": sp["sp-16"],      // 16px
  "lg": sp["sp-24"],      // 24px
  "xl": sp["sp-32"],      // 32px
  "2xl": sp["sp-40"],     // 40px
  "3xl": sp["sp-48"],     // 48px
  ...sp
};

export default spacing
