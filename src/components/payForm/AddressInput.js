import { useFormContext, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const AddressInput = ({ name, label, required, type }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            name={name}
            fullWidth
            label={label}
            required={required}
            defaultValue=""
            type={type}
          />
        )}
      />
    </Grid>
  );
};

export default AddressInput;
