import { FaGithub, FaSlack } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="relative isolate bg-bg-primary py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-3 space-y-12">
            <div>
              <h4 className="font-bold mb-6">Disclaimer</h4>
              <p className="text-sm text-gray-400 leading-relaxed space-y-2">
                MongoDB 한국 사용자 모임은 독립적인 커뮤니티입니다. 모든 활동은
                MongoDB 본사와 직접적인 연관은 없습니다. <br /> 본 커뮤니티는
                기술 교육과 지식 공유를 장려하며, MongoDB Community Code of
                Conduct를 따릅니다. <br />
                <a
                  href="https://www.mongodb.com/community-code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-bold underline"
                >
                  MongoDB Community Code of Conduct
                </a>{' '}
                를 참고하세요.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                <li>
                  <a
                    href="https://www.mongodb.com/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    MongoDB 공식 문서
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.mongodb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    MongoDB 학습 하기 & Skill Badges
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/mugkr/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:bg-primary/20 hover:text-primary transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://mongodevkr.slack.com/archives/C09J83YK45P"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:bg-primary/20 hover:text-primary transition-all"
              >
                <FaSlack size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MongoDB Developers KR. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
