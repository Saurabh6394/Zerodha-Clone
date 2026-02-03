import React from 'react'



const Support = () => {
  const styles = {
    wrapper: {
      maxWidth: "1100px",
      margin: "60px auto",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#1f2937"
    },

    heading: {
      fontSize: "32px",
      fontWeight: 600,
      marginBottom: "10px"
    },

    subHeading: {
      fontSize: "18px",
      color: "#6b7280",
      marginBottom: "40px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "24px"
    },

    card: {
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "24px",
      cursor: "pointer",
      transition: "all 0.2s ease"
    },

    cardTitle: {
      fontSize: "16px",
      fontWeight: 600,
      marginBottom: "8px"
    },

    cardText: {
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: 1.6
    }
  };

  const supportItems = [
    {
      title: "Account Opening",
      text: "Get help with opening a Zerodha account, documents, and onboarding."
    },
    {
      title: "Funds & Banking",
      text: "Deposits, withdrawals, bank accounts, and fund-related queries."
    },
    {
      title: "Trading & Orders",
      text: "Issues related to placing orders, margins, and trade execution."
    },
    {
      title: "Demat & Holdings",
      text: "Holdings, demat charges, pledging, and corporate actions."
    },
    {
      title: "Charges & Billing",
      text: "Brokerage, AMC, contract notes, and other charges."
    },
    {
      title: "Platforms & Tools",
      text: "Kite, Console, Coin, APIs, and technical issues."
    }
  ];

  return (
    <section style={styles.wrapper}>
      <h1 style={styles.heading}>Support</h1>
      <p style={styles.subHeading}>
        Search for an answer or browse help topics to get assistance.
      </p>

      <div style={styles.grid}>
        {supportItems.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#387ed1")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
          >
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;


// export default Hero
