import Head from "next/head";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import BlockBoxes from "../components/BlockBoxes";
import BlockCards from "../components/BlockCards";

export default function ElementsPage() {

  return (
    <>
      <Head>
        <title>Buttons blocks card</title>
      </Head>

      <Container>

        <BlockCards />

        <div className="buttonsHolder">
          <Button
            variant="contained"
            color="primary"
            size="medium">
            Button Text
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<EmailIcon />}>
            Button Text
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            endIcon={<EmailIcon />}>
            Button Text
          </Button>

        </div>

        <BlockBoxes />

      </Container>

    </>
  );
}
