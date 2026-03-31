export default function Html() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        <u>STUDENT REGISTRATION FORM</u>
      </h3>

      <form>
        <table align="left" cellPadding="5">
          <tbody>
            <tr>
              <td>FIRST NAME</td>
              <td>
                <input type="text" maxLength={30} /> (max 30 characters a-z and A-Z)
              </td>
            </tr>
            <tr>
              <td>LAST NAME</td>
              <td>
                <input type="text" maxLength={30} /> (max 30 characters a-z and A-Z)
              </td>
            </tr>
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select>
                  <option value="Day">Day</option>
                  {/* ... saare options ... */}
                  <option value="1">1</option>
                </select>
                <select>
                  <option value="Month">Month</option>
                  <option value="1">Jan</option>
                </select>
                <select>
                  <option>Year</option>
                  <option value="2024">2024</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>EMAIL ID</td>
              <td><input type="email" /></td>
            </tr>
            <tr>
              <td>MOBILE NUMBER</td>
              <td><input type="text" /> (11 digit number)</td>
            </tr>
            <tr>
              <td>GENDER</td>
              <td>
                Male <input type="radio" name="gender" />
                Female <input type="radio" name="gender" />
              </td>
            </tr>
            <tr>
              <td>ADDRESS</td>
              <td><textarea rows="4" cols="25"></textarea></td>
            </tr>
            <tr>
              <td>CITY</td>
              <td><input type="text" /> (max 15 numbers)</td>
            </tr>
            <tr>
              <td>PIN CODE</td>
              <td><input type="text" /> (6 digit number)</td>
            </tr>
            <tr>
              <td>STATE</td>
              <td><input type="text" /> (max 30 characters)</td>
            </tr>
            <tr>
              <td>COUNTRY</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>HOBBIES</td>
              <td>
                Drawing <input type="checkbox" />
                Singing <input type="checkbox" />
                Dancing <input type="checkbox" />
                Sketching <input type="checkbox" />
                <br /><br />
                Others <input type="checkbox" /><input type="text" />
              </td>
            </tr>
            {/* Qualification Row Fixed */}
            <tr>
              <td>QUALIFICATION</td>
              <td>
                <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Examination</th>
                      <th>Board</th>
                      <th>Percentage</th>
                      <th>Year of Passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td><td>Class X</td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td>
                    </tr>
                    <tr>
                      <td>2</td><td>Class XII</td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td>
                    </tr>
                    <tr align="center">
                      <td colSpan="2"></td>
                      <td>(10 char max)</td>
                      <td>(upto 2 decimal)</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>COURSES <br /> APPLIED FOR</td>
              <td>
                BCA <input type="radio" name="course" />
                B.Com <input type="radio" name="course" />
                B.Sc <input type="radio" name="course" />
                B.A <input type="radio" name="course" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}