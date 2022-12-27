import { Grid } from "@mui/material"
export const ProductsCard = (props) => {
  return (
    <div className=" p-8 align-middle  flex flex-col  justify-center text-center">
    <Grid item xs={3}>
      <img className=" mb-4 h-72 max-md:h-28 " src={"/"+props.id.substr(0,2)+"/"+props.id+".jpeg"} alt="not loading"></img>
      <button className=" border border-blue-700 border-spacing-5 hover:bg-blue-400 p-2 rounded-md w-16" type="submit">BUY</button>
    </Grid></div>
  )
}
