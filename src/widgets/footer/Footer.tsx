import { site } from '@shared/content'
import { linkStyles } from '@shared/lib/styles'
import { FaGithub, FaSlack } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="relative isolate bg-bg-primary py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-3 space-y-12">
            <div>
              <h4 className="font-bold mb-6">Disclaimer</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                MongoDB 한국 사용자 모임은 커뮤니티가 자발적으로 운영하는 독립적인
                모임입니다. 모든 활동은 커뮤니티 주도로 진행되며 MongoDB 본사를
                대표하지 않습니다. <br />본 커뮤니티는 기술 교육과 지식 공유를
                장려하며,{' '}
                <a
                  href={site.links.codeOfConduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyles.underline}
                >
                  MongoDB Community Code of Conduct
                </a>
                를 따릅니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                {site.resources.map((resource) => (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkStyles.default}
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 저장소"
                className={linkStyles.social}
              >
                <FaGithub size={20} />
              </a>
              <a
                href={site.links.slackGeneral}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slack 워크스페이스"
                className={linkStyles.social}
              >
                <FaSlack size={20} />
              </a>
            </div>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              이 사이트에 기여하기 →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
