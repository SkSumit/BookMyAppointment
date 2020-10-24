import {setEndDate,setStartDate,setText} from '../../Action/filterActions'
const date = new Date()
test("Test setting Start Date ", () => {
    const result = setStartDate(date);
    expect(result).toEqual({
        type: "SET_START_DATE",
        startDate:date,
      });
  });

test("Test setting End Date ", () => {
    const result = setEndDate(date);
    expect(result).toEqual({
        type: "SET_END_DATE",
        endDate: date,
      });
  });


  test("Test setting Text ", () => {
    const params = "This fucntion used for searching."
    const result = setText(params);
    expect(result).toEqual({
        type: "SET_TEXT",
        text:params,
      });
  });

  test("Test setting Deafult Text ", () => {
   
    const result = setText();
    expect(result).toEqual({
        type: "SET_TEXT",
        text:undefined,
      });
  });