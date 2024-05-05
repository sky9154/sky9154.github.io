import { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { H1, Paragraph } from '@components/Typography';
import { FadeIn } from '@components/Anime';
import { languages, tools, dbms, others } from '@assets/data/techStack';


type GroupType = {
  name: string;
  icon: ReactElement;
  bgColor: string;
  color: string;
}[];

interface GroupProps {
  name: string;
  groupObj: GroupType;
  delay: number;
}

const Group: FC<GroupProps> = ({ name, groupObj, delay }) => {
  const groupSize = 3;
  const groups: ReactElement[] = [];

  for (let i = 0; i < groupObj.length; i += groupSize) {
    const groupItems = groupObj.slice(i, i + groupSize).map((item) => (
      <FadeIn key={item.name} start={[0, 40]} delay={delay}>
        <Tooltip title={item.name} followCursor>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            bgcolor: item.bgColor,
            color: item.color,
            width: '52px',
            height: '52px',
            m: 0.5,
            borderRadius: 2
          }}
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Paragraph fontSize="30px">{item.icon}</Paragraph>
            </motion.div>
          </Box>
        </Tooltip>
      </FadeIn>
    ));

    groups.push(
      <Box key={`${name}-${i / groupSize}`} display="flex" justifyContent="center">
        {groupItems}
      </Box>
    );
  }

  return (
    <Grid item xs={12} sm={6} sx={{ width: '100%', my: 4 }}>
      <FadeIn start={[0, 40]} delay={delay}>
        <H1 textAlign="center" sx={{ mb: 2 }}>{name}</H1>
        {groups}
      </FadeIn>
    </Grid>
  );
};

const TechStack: FC = () => (
  <Grid
    container
    justifyContent="center"
    sx={{ width: '100%', py: 4, px: 2 }}
  >
    <Group name="Languages" groupObj={languages} delay={0.7} />
    <Group name="Tools" groupObj={tools} delay={1.0} />
    <Group name="DBMS" groupObj={dbms} delay={1.3} />
    <Group name="Others" groupObj={others} delay={1.6} />
  </Grid>
);

export default TechStack;