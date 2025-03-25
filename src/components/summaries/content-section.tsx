import { formatText, parseEmojiPoint, parsePoint } from "@/utils/summary-helpers";
import { MotionDiv } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

function EmojiPoint({ point }: { point: string }) {
  const { emoji, text } = parseEmojiPoint(point) ?? {};

  return (
    <MotionDiv variants={itemVariants} className="group relative bg-linear-to-br from-gray-200/[0.08] to-gray-200/[0.03] p-4 rounded-2xl border border-gray-500/10 hover:shadow-lg transition-all duration-300">
      <div className="relative flex items-start gap-3">
        <span className="text-lg lg:text-xl shrink-0 pt-1">{emoji}</span>
        <p className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed">
          {formatText(text ?? "")}
        </p>
      </div>
    </MotionDiv>
  )
}

function RegularPoint({ point }: { point: string }) {
  return (
    <MotionDiv variants={itemVariants} className="group relative bg-linear-to-br from-gray-200/[0.08] to-gray-200/[0.03] p-4 rounded-2xl border border-gray-500/10 hover:shadow-lg transition-all duration-300">
      <div className="relative flex items-start gap-3">
        <p className="relative text-lg lg:text-xl text-muted-foreground/90 leading-relaxed text-left">
          {formatText(point)}
        </p>
      </div>
    </MotionDiv>
  )
}
export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <MotionDiv
      variants={containerVariants}
      key={points.join("")}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4">
      {points.map((point, index) => {
        const { isMainPoint, hasEmoji, isEmpty } = parsePoint(point);

        if (isEmpty) return null;

        if (hasEmoji || isMainPoint) {
          return (
            <EmojiPoint key={`point-${index}`} point={point} />
          )
        }
        return <RegularPoint key={`point-${index}`} point={point} />
      })}
    </MotionDiv>
  )
}
