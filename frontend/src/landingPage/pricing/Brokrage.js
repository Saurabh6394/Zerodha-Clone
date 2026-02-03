import React from 'react'

const Brokrage = () => {
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "60px auto",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#1f2937"
    },
    heading: {
      fontSize: "24px",
      fontWeight: 500,
      marginBottom: "16px"
    },
    tableWrapper: {
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      overflow: "hidden",
      marginBottom: "50px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse"
    },
    th: {
      textAlign: "left",
      fontSize: "14px",
      fontWeight: 500,
      color: "#374151",
      padding: "14px 16px",
      borderBottom: "1px solid #e5e7eb"
    },
    td: {
      padding: "14px 16px",
      fontSize: "14px",
      borderBottom: "1px solid #f3f4f6"
    },
    badge: {
      backgroundColor: "#22c55e",
      color: "#fff",
      fontSize: "12px",
      fontWeight: 600,
      padding: "4px 10px",
      borderRadius: "4px",
      display: "inline-block"
    },
    note: {
      fontSize: "13px",
      color: "#6b7280",
      lineHeight: 1.6
    },
    link: {
      color: "#2563eb",
      textDecoration: "none"
    }
  };

  return (
    <div className="container" style={styles.container}>

      {/* Charges for account opening */}
      <h2 style={styles.heading}>Charges for account opening</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type of account</th>
              <th style={styles.th}>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Online account</td>
              <td style={styles.td}><span style={styles.badge}>FREE</span></td>
            </tr>
            <tr>
              <td style={styles.td}>Offline account</td>
              <td style={styles.td}><span style={styles.badge}>FREE</span></td>
            </tr>
            <tr>
              <td style={styles.td}>NRI account (offline only)</td>
              <td style={styles.td}>₹ 500</td>
            </tr>
            <tr>
              <td style={styles.td}>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td style={styles.td}>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demat AMC */}
      <h2 style={styles.heading}>
        Demat AMC (Annual Maintenance Charge)
      </h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Value of holdings</th>
              <th style={styles.th}>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Up to ₹4 lakh</td>
              <td style={styles.td}>
                <span style={styles.badge}>FREE*</span>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>₹4 lakh – ₹10 lakh</td>
              <td style={styles.td}>
                ₹ 100 per year, charged quarterly*
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Above ₹10 lakh</td>
              <td style={styles.td}>
                ₹ 300 per year, charged quarterly
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note */}
      <p style={styles.note}>
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,{" "}
        <a href="#" style={styles.link}>click here</a>.
      </p>

    </div>
  );
};

export default Brokrage;


