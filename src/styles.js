const styles = () => ({
  containerContent: {
    display: "flex",
    padding: "40px 24px",
    width: "100%",
    gap: "16px",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    float: "left",
    backgroundColor: "green",
  },
  contentText: {
    fontWeight: 400,
    fontSize: 16,
    width: 440,
    height: 72,
  },
  containerActions: {
    display: "flex",
    width: 544,  
    height: 36,  
    gap: 14, 
    padding: "16px 16px 16px 0px",
  },
  cancelButton: {
    width: 107,
    height: 36,
    borderRadius: 4,
    fontWeight: "bold",
  },
  principalButton: {
    width: 160,
    height: 36,
    borderRadius: 4,
    padding: "6px 16px",
    fontSize: "0.8em",
    lineHeight: "24px",
    letterSpacing: 0.4,
    fontWeight: "bold",
  },
});

export default styles;