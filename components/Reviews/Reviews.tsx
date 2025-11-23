import { Camper } from "@/lib/api/api";
import { Avatar, Box, Rating, Typography } from "@mui/material";

interface Props {
  item: Camper;
}

const CustomStar = ({ filled }: { filled?: boolean }) => (
  <svg width="16" height="16">
    <use
      href={
        filled
          ? "/icons/symbol-defs.svg#icon-Property-1PressedStar"
          : "/icons/symbol-defs.svg#icon-Property-1DefaultStar"
      }
    />
  </svg>
);

const Reviews = ({ item }: Props) => {
  if (!item.reviews || item.reviews.length === 0) {
    return <Typography>No reviews yet</Typography>;
  }

  return (
    <Box maxWidth={631} display="flex" flexDirection="column" gap="44px">
      {item.reviews.map((el, index) => (
        <Box key={index}>
          <Typography
            component="div"
            sx={{ fontSize: "1rem", fontWeight: 500 }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="16px"
            >
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: "secondary.dark",
                  color: "primary.main",
                }}
              >
                {el.reviewer_name.charAt(0)}
              </Avatar>
              <Box display="flex" flexDirection="column" gap={0.5}>
                {el.reviewer_name}
                <Rating
                  value={el.reviewer_rating}
                  precision={0.5}
                  readOnly
                  icon={<CustomStar filled />}
                  emptyIcon={<CustomStar />}
                />
              </Box>
            </Box>
          </Typography>

          <Typography marginTop={2} variant="body2" color="textSecondary">
            {el.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
