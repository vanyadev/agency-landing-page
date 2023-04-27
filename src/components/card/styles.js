export const styles = {
  card: (theme) => ({
    textAlign: "left",
    background: "#FFFFFF",
    border: `0.5px solid ${theme.palette.slateBlue.main}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    width: "403px",
    padding: "44px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "403px",
    },
  }),
  btn: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",

    textDecorationLine: "underline",
    textTransform: "capitalize",

    color: "#777FEB",
  },
  listItem: (theme) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    padding: "12px 0",
  }),
};
